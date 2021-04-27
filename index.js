function SumValues()
{
    var edp, cip, sip, algo, mode, el1, el2, el3, el4;
    var pil, com, veh, lec, lum, sysen, con, syscomp, nav, sma, ass, int, sysint, mod;
    edp = Number(document.calc.edp.value);
    cip = Number(document.calc.cip.value);
    sip = Number(document.calc.sip.value);
    algo = Number(document.calc.algo.value);
    mode = Number(document.calc.mode.value);
    el1 = Number(document.calc.el1.value);
    el2 = Number(document.calc.el2.value);
    el3 = Number(document.calc.el3.value);
    el4 = Number(document.calc.el4.value);
    console.log("Ok");
    

    pil = (4*(edp + cip) + 1*(sip + algo) + 4*mode + 1.5*(el1 + el2 + el3 + el4))/20;
    com = (3*(edp + cip) + 3*(sip + algo) + 3*mode + 1.5*(el1 + el2 + el3 + el4))/21;
    veh = (1*(edp + cip) + 4*(sip + algo) + 4*mode + 1.5*(el1 + el2 + el3 + el4))/20;
    lec = (3*(edp + cip) + 3*(sip + algo) + 3*mode + 1.5*(el1 + el2 + el3 + el4))/21;
    lum = (4*(edp + cip) + 1*(sip + algo) + 4*mode + 1.5*(el1 + el2 + el3 + el4))/20;
    sysen = (4*(edp + cip) + 1*(sip + algo) + 4*mode + 1.5*(el1 + el2 + el3 + el4))/20;
    con = (4*(edp + cip) + 4*(sip + algo) + 1*mode + 1.5*(el1 + el2 + el3 + el4))/23;
    syscomp = (1*(edp + cip) + 4*(sip + algo) + 4*mode + 1.5*(el1 + el2 + el3 + el4))/20;

    nav = (2*(edp + cip) + 4*(sip + algo) + 3*mode + 1.5*(el1 + el2 + el3 + el4))/21;
    sma = (4*(edp + cip) + 1*(sip + algo) + 4*mode + 1.5*(el1 + el2 + el3 + el4))/20;
    ass = (5*(sip + algo) + 4*mode + 1.5*(el1 + el2 + el3 + el4))/20;

    int = (2*(edp + cip) + 2*(sip + algo) + 5*mode + 1.5*(el1 + el2 + el3 + el4))/19;
    sysint = (1*(edp + cip) + 3*(sip + algo) + 5*mode + 1.5*(el1 + el2 + el3 + el4))/19;
    mod = (3*(edp + cip) + 4*(sip + algo) + 2*mode + 1.5*(el1 + el2 + el3 + el4))/22;

    document.res.pil.value = pil.toFixed(2);
    document.res.com.value = com.toFixed(2);
    document.res.veh.value = veh.toFixed(2);
    document.res.lec.value = lec.toFixed(2);
    document.res.lum.value = lum.toFixed(2);
    document.res.sysen.value = sysen.toFixed(2);
    document.res.con.value = con.toFixed(2);
    document.res.syscomp.value = syscomp.toFixed(2);
    document.res.nav.value = nav.toFixed(2);
    document.res.sma.value = sma.toFixed(2);
    document.res.ass.value = ass.toFixed(2);
    document.res.int.value = int.toFixed(2);
    document.res.sysint.value = sysint.toFixed(2);
    document.res.mod.value = mod.toFixed(2);

    var element = document.getElementById("moyennes");
    var gif, rennes, metz;
    gif = (pil + veh + lec + lum + sysen + con + syscomp)/7;
    rennes = (nav + sma + ass)/3;
    metz = (int + sysint+mod)/3;

    gif = gif.toFixed(2);
    rennes = rennes.toFixed(2);
    metz = metz.toFixed(2);

    var lab = document.createElement("label");
    var text = document.createTextNode("Moyennes :");
    lab.appendChild(text);
    element.appendChild(lab);

    var ptag = document.createElement("p");
    var text = document.createTextNode("Gif : "+gif.toString());
    ptag.appendChild(text);
    if (gif <= 11) {ptag.style.color = "#AE1100"};
    if (11 < gif && gif <= 13) {ptag.style.color = "#f77f00"};
    if (gif > 13) {ptag.style.color = "#90be6d"}
    element.appendChild(ptag);

    var ptag = document.createElement("p");
    var text = document.createTextNode("Rennes : "+rennes.toString());
    ptag.appendChild(text);
    if (rennes <= 11) {ptag.style.color = "#AE1100"};
    if (11 < rennes && rennes <= 13) {ptag.style.color = "#f77f00"};
    if (rennes > 13) {ptag.style.color = "#90be6d"}
    element.appendChild(ptag);

    var ptag = document.createElement("p");
    var text = document.createTextNode("Metz : "+metz.toString());
    ptag.appendChild(text);
    if (metz <= 11) {ptag.style.color = "#AE1100"};
    if (11 < metz && metz <= 13) {ptag.style.color = "#f77f00"};
    if (metz > 13) {ptag.style.color = "#90be6d"}
    element.appendChild(ptag);
}