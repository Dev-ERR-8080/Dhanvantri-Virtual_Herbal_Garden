// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute, Router } from '@angular/router';
// import { FavService } from 'src/app/services/fav.service';
// import { PlacesService } from 'src/app/services/places.service';
// import { Places } from 'src/app/shared/models/Places';

// @Component({
//   selector: 'app-places-content',
//   templateUrl: './places-content.component.html',
//   styleUrls: ['./places-content.component.css']
// })
// export class PlacesContentComponent implements OnInit {
//   place: any = {}; // Only include the necessary fields

//   constructor(
//     private activatedRoute: ActivatedRoute, 
//     private placesService: PlacesService, 
//     private favService: FavService, 
//     private router: Router
//   ) {}

//   ngOnInit(): void {
//     this.activatedRoute.params.subscribe((params) => {
//       if (params['scientificName']) {
//         const scientificName = params['scientificName'];
//         this.placesService.getPlaceByScientificName(scientificName).subscribe(
//           serverPlace => {
//             // Only pick fields to display
//             this.place = {
//               scientificName: serverPlace.scientificName,
//               commonNames: serverPlace.commonNames,
//               family: serverPlace.family,
//               medicinalRating: serverPlace.medicinalRating
//             };
//           },
//           error => {
//             console.error("Error fetching place:", error);
//           }
//         );
//       }
//     });
//   }

//   // addToFav() {
//   //   this.favService.addToFav(this.place);
//   //   this.router.navigateByUrl('/fav-page');
//   // }
// }
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlacesService } from 'src/app/services/places.service';
import { Places } from 'src/app/shared/models/Places';

@Component({
  selector: 'app-places-content',
  templateUrl: './places-content.component.html',
  styleUrls: ['./places-content.component.css']
})
export class PlacesContentComponent implements OnInit {
  place: any = {}; // Initialize with an empty object
  
  activeTab: string = 'edible'; // Default tab
  constructor(
    private activatedRoute: ActivatedRoute, 
    private placesService: PlacesService, 
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['scientificName']) {
        const scientificName = params['scientificName'];

        this.placesService.getPlaceByScientificName(scientificName).subscribe(
          serverPlace => {
            this.place = serverPlace;
            console.log("Fetched place:", this.place); // Log fetched place
          },
          error => {
            console.error("Error fetching place:", error);
          }
        );
      }
    });
  }
}

