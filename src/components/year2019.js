import React from 'react'
import Yposxeseis from './yposxeseis'
export default function Year2019(){
    // Remeber to incement the id by 1 when adding a new component

    return (
        <div style={{padding: "15px"}}>
            
            <Yposxeseis
            id={"2"}
            description={"Mείωση του φόρου ακίνητης περιουσίας για το 2019"}
            progress={100} />

            <Yposxeseis
            id={"1"}
            description={"Mείωση του βάρους για την απόκτηση παιδιού, στήριξη των εργαζόμενων γονέων – κυρίως των γυναικών – και των μεγάλων οικογενειών, επιστροφή των νέων που έφυγαν και διαγενεακή αλληλεγγύη μέσω ενός σύγχρονου ασφαλιστικού"}
            progress={30} />

            <Yposxeseis 
            id={"3"}
            description={"Ολοκλήρωσης της έκδοσης των κοινών υπουργικών αποφάσεων (ΚΥΑ) για το Ελληνικό"} 
            progress={100} />

            <Yposxeseis 
            id={"3"}
            description={"Να μπορουν να ψηφίζουν, οι Έλληνες του εξωτερικού, από τον μόνιμο τόπο διαμονής τους."} 
            progress={10} />
    </div>  
    );
}