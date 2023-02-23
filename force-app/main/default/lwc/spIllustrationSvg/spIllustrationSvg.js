import { LightningElement,api } from 'lwc';

import Empty from "./spIllustrationSvg.html";
import GoingCamping from "./svg/goingCamping.html";
import Maintenance from "./svg/maintenance.html";
import Desert from "./svg/desert.html";
import OpenRoad from "./svg/openRoad.html";
import NoAccess from "./svg/noAccess.html";
import NoConnection from "./svg/noConnection.html";
import NotAvailableInLightning from "./svg/notAvailableLightning.html";
import PageNotAvailable from "./svg/pageNotAvailable.html";
import WalkthroughNotAvailable from "./svg/walkthrough.html";
import FishingDeals from "./svg/fishing.html";
import LakeMountain from "./svg/lakeMountain.html";
import NoEvent from "./svg/noEvent.html";
import NoTask from "./svg/noTask.html";
import Setup from "./svg/setup.html";
import GoFishing from "./svg/goneFishing.html";
import NoAccess2 from "./svg/noAccess2.html";
import NoContent from "./svg/noContent.html";
import NoPreview from "./svg/noPreview.html";
import Preview from "./svg/preview.html";
import Research from "./svg/research.html";



const variantMap = {
    
    "Going Camping": GoingCamping,
    "Maintenance": Maintenance,
    "Desert": Desert,
    "Open Road": OpenRoad,   
    "No Access": NoAccess,
    "No Connection": NoConnection,
    "Not Available In Lightning": NotAvailableInLightning,
    "Page Not Available": PageNotAvailable,
    "Walkthrough Not Available": WalkthroughNotAvailable,
    "Fishing Deals": FishingDeals,
    "Lake Mountain": LakeMountain,
    "No Events": NoEvent,   
    "No Task": NoTask,
    "Setup": Setup,
    "Gone Fishing": GoFishing,
    "No Access 2": NoAccess2,  
    "No Content": NoContent,
    "No Preview": NoPreview,
    "Preview": Preview,    
    "Research": Research,
    
    
  /*  One Call to Action - Link
    One Call to Action - Button
    One Call to Action - Button Brand
    Two Calls to Action
    
    Heading and Message
    Heading Only
    Message Only*/
   

  };

export default class SpIllustrationSvg extends LightningElement {
    @api variant;  

    render() {

        if(this.variant){
            if (variantMap[this.variant]) {
                return variantMap[this.variant];
              } else {
                console.warn(
                  `Image for variant "${variant}"not found. Check the variants: ${Object.keys(
                    variantMap
                  )}`
                );
                return Empty;
              }
        } else {
            return Empty;
        }

    }
       
}