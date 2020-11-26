
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.sass']
})
export class ProductComponent implements OnInit {

  constructor() { }
  p:number = 1;
  verduras = [
    {
      "id": 1,
      "nombre": "Banano",
      "descripcion": "Además de ser deliciosa, esta popular fruta es rica en potasio, el cual ayuda a mejorar la salud cardiovasculary a regular los niveles de azúcar en la sangre. Contiene triptofán, una proteína que el cuerpo convierte en serotonina que hace que nos relaje y mejore nuestro carácter.",
      "precio":"3.500",
      "imagen" : "/assets/img/bananas.png"
    },
    {
      'id':2,
      "nombre": "Manzana Roja",
      "descripcion": "Ayuda a reducir el colesterol alto, los niveles de azúcar en sangre y el riesgo de padecer enfermedades cardiovasculares. Elimina las toxinas, al ser buena estimulante de los riñones y del hígado gracias a que es rica en pectina, una mezcla de polímeros ácidos y neutros muy ramificados.",
      "precio":"8.300",
      "imagen" : "/assets/img/manzana_roja.png"
    },
    {
      "id": 3,
      "nombre":"Pimentón",
      "descripcion": "Su alto contenido en hierro hace que el pimentón ayude a evitar la anemia ferropénica,y por su contenido en vitamina A, previene enfermedades en los ojos, fortalece el sistema inmunitario y además es conocido por sus propiedades anticancerosas. Contiene fibra y poca grasa.",
      "precio":"5.390",
      "imagen" : "/assets/img/pimenton.png"
    },
    {
      "id": 4,
      "nombre": "Aguacate",
      "descripcion": "Llamado la mantequilla vegetal por ser muy rico en grasa, pero esta se trata de una grasa saludable, vegetal, insaturada y sin colesterol. Es una fruta muy rica en minerales, principalmente potasio, hierro y fósforo. Además es un antibiótico y antioxidante natural.",
      "precio":"6.520",
      "imagen" : "/assets/img/aguacate.png"
    },
    {
      "id": 5,
      "nombre": "Limón",
      "descripcion": "Es una fruta rica en vitamina B y rico en vitaminas y minerales, favorece la digestión y entra dentro del grupo de alimentos que contienen propiedades antioxidantes que favorecen la salud del cuerpo y nutren el sistema inmunológico. Además previene la anemia.",
      "precio":"1.500",
      "imagen" : "/assets/img/limon.png"
    },
    {
      "id": 6,
      "nombre": "Papaya",
      "descripcion": "Ésta fruta es una de las mejores para el sistema digestivo, gracias a que es alta en fibra y agua, tiene propiedades laxantes y desintoxicantes para ayudarnos a depurar las toxinas y los residuos que se acumulan en el intestino, crecen en climas tropicales y se caracteriza por su sabor dulce.",
      "precio":"3.850",
      "imagen" : "/assets/img/papaya.png"
    },
    {
      "id": 7,
      "nombre": "Fresa",
      "descripcion": "Contienen fibra, que ayuda a regular los procesos digestivos y a reducir la sensación de hambre. Ayudan a disminuir el nivel de colesterol malo en sangre, gracias a la gran cantidad de ácido ascórbico, lecitina y pectina que contiene el fruto, y es una de las frutas más hidratantes.",
      "precio":"12.320",
      "imagen" : "/assets/img/fresas.png"
    },
    {
      "id":8,
      "nombre":"Pera",
      "descripcion": "Poseen una gran cantidad de vitaminas, como la A, B1, B2, B3, C, E y K. Es rica en ácido fólico, cobre, fósforo, potasio, boro, calcio, hierro, magnesio, sodio y azufre.Es una gran fuente de potasio, por lo que ingerir una pera diaria le brindará mejor salud a tu corazón.",
      "precio":"6.900",
      "imagen" : "/assets/img/pera.png"
    },
    {
      "id": 9,
      "nombre": "Papa",
      "descripcion": "Es un tipo de carbohidrato complejo, lo que la convierte en una fuente de energía 100% natural, aporta las proteínas diarias necesarias al organismo además de que posee un alto nivel de antioxidantes y nutrientes esenciales, rica en vitaminas C, B6, B3 y B9.",
      "precio":"1.210",
      "imagen" : "/assets/img/papa.png"
    },
    {
      "id": 10,
      "nombre": "Uvas",
      "descripcion": "Son ricas en antioxidantes, su índice glucémico es medio, son ricas en fibra en hidratos de carbono de rápida asimilación, contienen vitamina C y entre sus minerales destacan el potasio, el cobre y el hierro, aunque también calcio, fósforo, magnesio, manganeso, azufre y selenio",
      "precio":"8.510",
      "imagen" : "/assets/img/uvas.png"
    },
    {
      "id": 11,
      "nombre": "Brócoli",
      "descripcion": "Rico en vitaminas y en minerales, cubriendo las necesidades diarias de vitamina C que un adulto necesita, además aporta ácido fólico y vitamina A. Originario del Mediterráneo, desde la época del Imperio Romano el brócoli ha estado muy presente en la gastronomía italiana.",
      "precio":"1.230",
      "imagen" : "/assets/img/brocoli.png"
    },
    {
      "id": 12,
      "nombre": "Maracuyá",
      "descripcion": "Rica en Vitamina A y vitamina C, que gracias a sus propiedades antioxidantes, previene el envejecimiento, protege contra los daños solares y fortalece el sistema inmunológico.Tiene potasio, fósforo y magnesio. Aporta un elevado contenido en hierro y flavonoides.",
      "precio":"2.180",
      "imagen" : "/assets/img/maracuya.png"
    },
    {
      "id": 13,
      "nombre": "Pepino",
      "descripcion": "Ayuda en la pérdida de peso, por ser bajo en calorías y por contener fibras que ayudan a aumentar la sensación de saciedad. Evita los calambres durante el ejercicio, debido a que es un vegetal rico en potasio y magnesio, minerales importantes para la contracción muscular.",
      "precio":"5.700",
      "imagen" : "/assets/img/pepino.png"
    },
    {
      "id": 14,
      "nombre": "Tomate",
      "descripcion": "Es rico en vitaminas y minerales: esta hortaliza aporta vitamina C, un potente antioxidante natural, además de vitamina A, K, hierro y potasio. El tomate protege la vista: contiene vitamina A, la cual ayuda a proteger nuestros ojos de enfermedades degenerativas o ceguera nocturna.",
      "precio":"2.470",
      "imagen" : "/assets/img/tomate.png"
    },
    {
      "id": 15,
      "nombre": "Piña",
      "descripcion": "Es buena para dietas de adelgazamiento, por su contenido en fibra que sacia el hambre, previene el estreñimiento, normaliza el tránsito intestinal, además de evitar la obesidad es un laxante natural y antiflatulento. Es diurética, desintoxicante y depuradora.",
      "precio":"4.490",
      "imagen" : "/assets/img/piña.png"
    },
    {
      "id": 16,
      "nombre": "Yuca",
      "descripcion": "El contenido en calcio de la yuca, unido al aporte de vitamina K, ayuda a mantener sanos los huesos y previene la presencia de osteoporosis. La vitamina B6 favorece el cuidado de la piel y el pelo. También contiene hierro, que ayuda a prevenir la presencia de anemia.",
      "precio":"1.870",
      "imagen" : "/assets/img/yuca.png"
    },
    {
      "id": 17,
      "nombre": "Zanahoria",
      "descripcion": "Gracias a su alto contenido en potasio y fósforo, la zanahoria funciona como regeneradora de los nervios, lo que la convierte en un alimento perfecto para vigorizar las mentes cansadas. Tiene propiedades anticancerígenas, según un informe publicado por la OMS en 2014.",
      "precio":"990",
      "imagen" : "/assets/img/zanahoria.png"
    },
    {
      "id": 18,
      "nombre": "Mazorca",
      "descripcion": "El fósforo, junto con el magnesio, el manganeso , el zinc , el hierro y el cobre son algunos de los nutrientes esenciales que se encuentran en todas las variedades de maíz. También contiene trazas de minerales como el selenio, que son difíciles de encontrar en la mayoría de las dietas.",
      "precio":"4.250",
      "imagen" : "/assets/img/mazorca.png"
    },
    {
      "id": 19,
      "nombre": "Cebolla",
      "descripcion": "Contiene azúcar natural, vitaminas A, B6, C y E. Gracias a sus propiedades depurativas, desinfectantes, desinflamatorias y al ser rica en vitaminas A, B6, C, hierro y potasio. La cebolla cruda es un must para incluir en tu dieta diaria por ser ideal para aliviar las enfermedades respiratorias.",
      "precio":"1.860",
      "imagen" : "/assets/img/cebolla.png"
    },
    {
      "id":20,
      "nombre": "Mango",
      "descripcion": "Contiene carotenoides, ácido ascórbico, terpenoides y polifenoles, todos responsables de las propiedades preventivas del cáncer. Previene las enfermedades del corazón, al reducir la grasa corporal y controlar el azúcar, pues contiene numerosos minerales y fitoquímicos.",
      "precio":"3.740",
      "imagen" : "/assets/img/mango.png"
    }

    ]

  ngOnInit() {
  }

}
