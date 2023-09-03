function taux_homme(V,t,m) {
    var deg = (t / 100); // calcule du degré en %
    var taux = (V * deg * 0.8) / (0.7 * m)
    arrondi = taux*100;
    arrondi = Math.round(arrondi);
    arrondi = arrondi/100;         
    var rep = ("Votre taux est de " + arrondi + "g/l.");
    if (taux > 0.5) {
        alert(rep + " Vous êtes au dessus de la limite légale !"  );
    }else{
        alert(rep);
    } 
}

function taux_femme(V,t,m) {
    var deg = (t / 100); // calcule du degré en %
    var taux = (V * deg * 0.8) / (0.6 * m);
    arrondi = taux*100;
    arrondi = Math.round(arrondi);
    arrondi = arrondi/100;         
    var rep = ("Votre taux est de " + arrondi + "g/l.");
    if (taux > 0.5) {
        alert(rep + " Vous êtes au dessus de la limite légale !"  );
    }else{
        alert(rep);
    } 
}