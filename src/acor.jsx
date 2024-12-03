import { useState } from 'react';
import { Accordion, AccordionItem, AccordionHeader, AccordionBody } from 'reactstrap';

export default function RecetasAccordion() {
  const [open, setOpen] = useState('1'); // Controla cuál acordeón está abierto

  const toggle = (id) => {
    setOpen(open === id ? '' : id); // Cierra el actual si se vuelve a hacer clic
  };

  return (
    <div>
      <Accordion open={open} toggle={toggle}>
        <AccordionItem>
          <AccordionHeader targetId="1">RECETA DE LA PAZ</AccordionHeader>
          <AccordionBody accordionId="1">
            <h5>RECETA DE LA PAZ</h5>
            <p>Esta es la receta de La Paz
            El plato típico de La Paz, capital de Bolivia, es el plato paceño. Este plato tradicional nació durante un asedio de tres meses y se originó con la recolección de choclos, habas, papas y quesos de oveja. Con el tiempo, se añadió carne al plato y se pasó de usar queso de oveja a queso de vaca.
            </p>
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="2">RECETA DE ORURO</AccordionHeader>
          <AccordionBody accordionId="2">
            <h5>RECETA DE ORURO</h5>
            <p>Esta es la receta de Charquekan: Plato elaborado con charque de res o llama desmenuzado frito, acompañado con huevo duro, mote, papa, queso y llajua. </p>
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="3">RECETA DE COCHABAMBA</AccordionHeader>
          <AccordionBody accordionId="3">
            <h5>RECETA DE COCHABAMBA</h5>
            <p>Esta es la receta de
            Chicharon Sacabeño plato típico de Cochabamba fue presentado hoy, en el patio de Culturas. La Paz, 29 de noviembre de 2022
            </p>
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="4">RECETA DE POTOSÍ</AccordionHeader>
          <AccordionBody accordionId="4">
            <h5>RECETA DE POTOSÍ</h5>
            <p>Esta es la receta de Potosí
            Kalapurka
            Sopa tradicional al agua con charca de yama, hankakipa y ají rojo en vaina. Se le pone una piedra volcánica para mantenerla caliente.
            </p>
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="5">RECETA DE PANDO</AccordionHeader>
          <AccordionBody accordionId="5">
            <h5>RECETA DE PANDO</h5>
            <p>Esta es la receta de El surubí, en todas sus presentaciones es una carne muy noble, pero sudado su potencial se multiplica, los sabores se concentran y los aromáticos le dan un aroma inigualable, un placer para los sentidos</p>
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="6">RECETA DE SANTA CRUZ</AccordionHeader>
          <AccordionBody accordionId="6">
            <h5>RECETA DE SANTA CRUZ</h5>
            <p>Esta es la receta de Majadito
            Un plato típico de la gastronomía boliviana, principalmente preparado en Santa Cruz y el Beni. </p>
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="7">RECETA DE CHUQUISACA</AccordionHeader>
          <AccordionBody accordionId="7">
            <h5>RECETA DE CHUQUISACA</h5>
            <p>Esta es la receta de Fritanga: Un plato representativo de Chuquisaca que se prepara con carne de cerdo, ají colorado, cebolla y mote blanco</p>
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="8">RECETA DE BENI</AccordionHeader>
          <AccordionBody accordionId="8">
            <h5>RECETA DE BENI</h5>
            <p>Esta es la receta de Keperi beniano: Es un plato preparado con vacío de carne, jugo de limón, pimienta, comino, sal y agua, servido con yuca frita y arroz con queso, a veces coronado con ensalada, este potaje abraza a los comensales con una mezcla de texturas y sabores.</p>
          </AccordionBody>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
