// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-therapiese',
//   templateUrl: './therapiese.component.html',
//   styleUrls: ['./therapiese.component.css']
// })
// export class TherapieseComponent implements OnInit {
//   activeContainerIndex: number | null = null; // Track the index of the active container

  // containers = [
  //   {
  //     title: 'Abhyanga',
  //     description: 'A full-body warm oil massage using herbal oils specific to the individual’s Dosha (Vata, Pitta, or Kapha). The oil is massaged into the skin in a synchronized manner by one or two therapists.',
  //     benefits: [
  //       'Relieves fatigue and muscle tension',
  //       'Improves blood circulation',
  //       'Nourishes the skin and promotes longevity',
  //       'Reduces stress and improves sleep',
  //       'Balances Doshas and detoxifies the body'
  //     ],
  //     application: 'This therapy is suitable for general wellness, joint and muscle stiffness, and anxiety disorders.'
  //   },
  //   {
  //     "title": "Shirodhara",
  //     "description": "Involves a continuous stream of warm, medicated oil being poured onto the forehead, specifically over the 'third eye' area.",
  //     "benefits": [
  //       "Relieves mental stress and anxiety",
  //       "Improves sleep and treats insomnia",
  //       "Soothes nervous system disorders",
  //       "Promotes mental clarity and relaxation"
  //     ],
  //     "application": "Effective for insomnia, migraines, depression, and mental fatigue."
  //   },
  //   {
  //     "title": "Panchakarma",
  //     "description": "A detoxification process that includes five purification therapies to eliminate toxins from the body. The five primary procedures are:\n\n- Vamana: Therapeutic vomiting to cleanse the respiratory system and stomach.\n- Virechana: Purgation to cleanse the intestines and liver.\n- Basti: Enema therapy for colon cleansing.\n- Nasya: Nasal administration of herbal oils for sinus cleansing.\n- Raktamokshana: Bloodletting to remove toxins from the bloodstream.",
  //     "benefits": [
  //       "Deep detoxification of the entire body",
  //       "Rejuvenation of bodily tissues and organs",
  //       "Balancing of Doshas and prevention of chronic diseases"
  //     ],
  //     "application": "Useful for chronic conditions, digestive disorders, skin problems, and general body detoxification."
  //   },
  //   {
  //     "title": "Swedana (Herbal Steam Therapy)",
  //     "description": "A herbal steam bath where the body is exposed to medicated steam that opens up pores and induces sweating to expel toxins.",
  //     "benefits": [
  //       "Relieves muscle tension and stiffness",
  //       "Promotes detoxification through sweat",
  //       "Enhances circulation and improves skin health",
  //       "Reduces pain in conditions like arthritis"
  //     ],
  //     "application": "Typically used after Abhyanga to further detoxify the body and relieve muscle and joint pain."
  //   },{
  //     "title": "Udvartana (Herbal Powder Massage)",
  //     "description": "A dry massage that uses specially prepared herbal powders. It is performed with firm pressure in an upward direction.",
  //     "benefits": [
  //       "Reduces body fat and cellulite",
  //       "Improves skin tone and texture",
  //       "Stimulates lymphatic drainage",
  //       "Balances Kapha Dosha"
  //     ],
  //     "application": "Ideal for obesity, high cholesterol, and conditions related to excessive Kapha, such as sluggish metabolism and weight gain."
  //   },{
  //     "title": "Pizhichil (Oil Bath Therapy)",
  //     "description": "A continuous flow of warm, medicated oil is poured over the entire body while simultaneously receiving a gentle massage.",
  //     "benefits": [
  //       "Relieves joint pain, arthritis, and body stiffness",
  //       "Improves flexibility and muscle strength",
  //       "Promotes relaxation and rejuvenation",
  //       "Strengthens the immune system"
  //     ],
  //     "application": "Recommended for individuals with arthritis, rheumatic diseases, and neurological disorders."
  //   },
  //   {
  //     "title": "Kati Basti",
  //     "description": "A localized treatment focused on the lower back. A ring of dough is placed around the lumbar region, and warm medicated oil is poured into it and left for a period.",
  //     "benefits": [
  //       "Alleviates chronic lower back pain and sciatica",
  //       "Relieves stiffness in the muscles and joints",
  //       "Strengthens the lower back and spinal area"
  //     ],
  //     "application": "Useful for those suffering from lumbar spondylosis, sciatica, and muscle spasms in the lower back."
  //   },
  //   {
  //     "title": "Greeva Basti",
  //     "description": "Similar to Kati Basti but applied to the neck area. A dough dam is placed around the neck, and warm herbal oil is poured into it.",
  //     "benefits": [
  //       "Relieves pain and stiffness in the neck",
  //       "Improves flexibility in the cervical spine",
  //       "Treats cervical spondylosis and related issues"
  //     ],
  //     "application": "Ideal for neck pain, cervical spondylitis, and other neck-related issues."
  //   },
  //   {
  //     "title": "Janu Basti",
  //     "description": "A treatment focused on the knee joints. A dam of dough is created around the knees, and warm medicated oil is poured into it.",
  //     "benefits": [
  //       "Relieves knee pain and stiffness",
  //       "Lubricates the knee joint and improves flexibility",
  //       "Strengthens the knee joint and surrounding tissues"
  //     ],
  //     "application": "Effective for osteoarthritis, knee joint pain, and ligament injuries."
  //   },
  //   {
  //     "title": "Netra Tarpana",
  //     "description": "A rejuvenating treatment for the eyes. Ghee (clarified butter) or medicated oils are poured into a dough barrier around the eyes.",
  //     "benefits": [
  //       "Nourishes the optic nerves and improves vision",
  //       "Relieves eye strain, dry eyes, and eye fatigue",
  //       "Prevents degenerative eye diseases and improves eye health"
  //     ],
  //     "application": "Beneficial for those with eye strain, computer vision syndrome, and early stages of eye disorders like cataracts."
  //   },
  //   {
  //     "title": "Nasya (Nasal Therapy)",
  //     "description": "The administration of herbal oils or powders through the nasal passages. The therapy clears sinuses and helps balance the head region.",
  //     "benefits": [
  //       "Clears congestion in the head and sinuses",
  //       "Relieves headaches, migraines, and respiratory issues",
  //       "Improves mental clarity and memory"
  //     ],
  //     "application": "Ideal for sinusitis, migraines, allergies, and other respiratory or nasal problems."
  //   },{
  //     "title": "Takradhara",
  //     "description": "Similar to Shirodhara, but instead of oil, a stream of medicated buttermilk is poured on the forehead. It has cooling and calming effects.",
  //     "benefits": [
  //       "Reduces stress and anxiety",
  //       "Treats skin conditions like psoriasis",
  //       "Soothes nervous system disorders",
  //       "Improves sleep and mental clarity"
  //     ],
  //     "application": "Effective for conditions like psoriasis, insomnia, and high levels of stress or anxiety."
  //   },{
  //     "title": "Shiro Abhyanga (Head Massage)",
  //     "description": "A relaxing head massage that uses medicated oils to massage the scalp, forehead, and shoulders.",
  //     "benefits": [
  //       "Promotes relaxation and relieves tension",
  //       "Improves blood circulation in the scalp",
  //       "Prevents hair loss and strengthens hair",
  //       "Relieves headaches and mental fatigue"
  //     ],
  //     "application": "Suitable for those with headaches, stress, and hair problems like thinning or hair loss."
  //   },{
  //     "title": "Choorna Pinda Sweda (Herbal Powder Poultice Therapy)",
  //     "description": "Warm herbal powders are tied in cloth boluses (poultices) and used to massage the body. This therapy is highly effective for reducing pain and inflammation.",
  //     "benefits": [
  //       "Reduces muscle stiffness and joint pain",
  //       "Improves circulation and relieves swelling",
  //       "Treats inflammatory conditions like arthritis"
  //     ],
  //     "application": "Ideal for those suffering from arthritis, rheumatic conditions, and general muscle pain."
  //   },{
  //     "title": "Patra Pinda Sweda (Leaf Poultice Therapy)",
  //     "description": "A poultice therapy where a combination of medicinal leaves and herbs is heated and applied to the body in a rhythmic motion.",
  //     "benefits": [
  //       "Relieves joint pain, inflammation, and stiffness",
  //       "Improves circulation and strengthens muscles",
  //       "Alleviates symptoms of arthritis and sciatica"
  //     ],
  //     "application": "Used for treating joint pain, muscle cramps, and inflammatory conditions like osteoarthritis."
  //   }
                                                
    
   
//   ];

//   constructor() { }

//   ngOnInit(): void {
//   }

//   toggleContent(index: number): void {
//     // Toggle the active state of the clicked container
//     this.activeContainerIndex = this.activeContainerIndex === index ? null : index;
//   }
// }

import { Component, OnInit } from '@angular/core';
import { TherapyService } from '../../../services/therapys.service'; // Import the service

@Component({
  selector: 'app-therapys',
  templateUrl: './therapys.component.html',
  styleUrls: ['./therapys.component.css']
})
export class TherapysComponent implements OnInit {
  activeContainerIndex: number | null = null; // Track the index of the active container
  containers: any[] = []; // Store therapy data fetched from the API

  constructor(private TherapyService: TherapyService) { }

  ngOnInit(): void {
    // Fetch therapy data from the API when the component initializes
    this.TherapyService.getTherapys().subscribe(
      (data) => {
        this.containers = data; // Assign the fetched data to the containers array
      },
      (error) => {
        console.error('Error fetching therapys:', error);
      }
    );
  }

  toggleContent(index: number): void {
    // Toggle the active state of the clicked container
    this.activeContainerIndex = this.activeContainerIndex === index ? null : index;
  }
}
