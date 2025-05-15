"use client";

import { Brand } from '@/types/brands';
import { getBrandById } from '@/services/api';
import { useEffect, useState, useRef } from 'react';


export function FAQ({ brandId, brandData }: { brandId: string, brandData?: Brand }) {
  const [brand, setBrand] = useState<Brand | null>(brandData || null);
  const [loading, setLoading] = useState(!brandData);
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);
  const answerRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const fetchBrand = async () => {
      if (!brandData) {
        try {
          setLoading(true);
          const fetchedBrand = await getBrandById(brandId);
          setBrand(fetchedBrand);
        } catch (error) {
          console.error("Error fetching brand:", error);
        } finally {
          setLoading(false);
        }
      }
    };
    
    fetchBrand();
  }, [brandId, brandData]);

  if (loading) {
    return <div>Cargando preguntas frecuentes...</div>;
  }
  
  if (!brand || !brand.settings) {
    return <div>No se encontró información para esta marca.</div>;
  }

  const settings = brand.settings;

  const toggleQuestion = (index: number) => {
    if (openQuestion === index) {
      setOpenQuestion(null); // Cierra si ya está abierta
    } else {
      setOpenQuestion(index); // Abre la seleccionada
    }
  };

  const questions = [
    {
      question: "¿Cómo puedo publicar un producto para la venta?",
      answer: "¡Publicar tu producto es muy fácil! Simplemente haz clic en \"Vender\", crea una cuenta y sigue el proceso de publicación. Una vez que completes el formulario de venta, la publicación será revisada por nuestro equipo y en un plazo máximo de 24 horas, te avisaremos si está aprobada o rechazada. Después de ser revisada y aprobada, se hará pública. Si hay algún problema, recibirás un correo electrónico pidiendo hacer cambios antes de que pueda ser aceptada."
    },
    {
      question: "¿Cómo envío mi artículo después de que alguien lo compra?",
      answer: settings.faq.shippingAnswer
    },
    {
      question: "¿Cómo y cuándo recibo el pago?",
      answer: settings.faq.paymentAnswer
    },
    {
      question: "¿Hay cobros adicionales por vender mi producto por acá?",
      answer: settings.faq.additionalChargesAnswer
    }
  ];

  if (settings.faq.showCouponPolicy) {
    questions.push({
      question: "Política de uso de cupones",
      answer: `Los cupones que recibas por la venta de tus productos tienen las siguientes restricciones: a. Se pueden utilizar únicamente para compras en el sitio web ${brand.url}. b. Tiene un tiempo máximo para ser utilizado de 6 meses. c. Está restringido a un monto mínimo de pedido para que pueda utilizarse en el ecommerce. El monto mínimo está definido por el monto del cupón + $1.000 CLP.`
    });
  }

  const setAnswerRef = (index: number) => (el: HTMLDivElement | null) => {
    answerRefs.current[index] = el;
  };
  
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold mb-2 text-center">PREGUNTAS FRECUENTES</h1>
      <div className="w-full h-px bg-gray-300 my-6"></div>
      
      <div className="space-y-4 mt-8 max-w-3xl mx-auto">
        {questions.map((item, index) => (
          <div key={index} className="border border-white/20 rounded-lg shadow-sm bg-white/10 hover:bg-white/20 transition-all">
            <button
              onClick={() => toggleQuestion(index)}
              className="w-full px-6 py-4 text-left font-medium text-lg flex justify-between items-center text-white"
              aria-expanded={openQuestion === index}
            >
              <span className="transition-colors duration-300 hover:text-purple-200">{item.question}</span>
              <svg 
                className={`w-5 h-5 text-white transition-transform duration-300 ${openQuestion === index ? 'rotate-180' : ''}`} 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            <div 
              ref={setAnswerRef(index)}
              className="overflow-hidden transition-all duration-300 ease-in-out"
              style={{ 
                maxHeight: openQuestion === index ? 
                  (answerRefs.current[index]?.scrollHeight ? `${answerRefs.current[index]?.scrollHeight}px` : 'auto') : 
                  '0',
                opacity: openQuestion === index ? 1 : 0
              }}
            >
              <div className="px-6 py-4 bg-white/20 border-t border-white/10">
                <p className="text-white">{item.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}