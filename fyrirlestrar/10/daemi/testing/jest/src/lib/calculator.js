/**
 * Test-driven Development. Byrjum á að skrifa test sem klikkar, útfærum kóða
 * sem lætur það „verða grænt“ og höldum áfram.
 */

// Fyrsta útgáfa sem stenst fyrsta test
/*
export function calculate(str) {
  return 2;
}
*/

// Önnur útgáfa sem stenst fyrsta + annað test
/*
export function calculate(str) {
  if (str.indexOf('+') >= 0) {
    const split = str.split('+');
    return parseInt(split[0], 10) + parseInt(split[1], 10);
  }
}
*/

// Þriðja útgáfa sem stenst 1., 2. og 3. test
/*
export function calculate(str) {
  if (!str) {
    return null;
  }

  if (str.indexOf('+') >= 0) {
    const split = str.split('+');

    return split.reduce((a, b) => a + parseInt(b, 10), 0);
  }

  return null
}
*/

// Fjórða útgáfa sem stenst 1. - 4. test
/*
export function calculate(str) {
  if (!str) {
    return null;
  }

  if (str.indexOf('+') >= 0) {
    const split = str.split('+');

    return split.reduce((a, b) => a + parseInt(b, 10), 0);
  }
}
*/

// Fimmta útgáfa sem stenst 1. - 5. test
export function calculate(str) {
  if (!str) {
    return null;
  }

  if (str.indexOf('+') >= 0) {
    const split = str.split('+');

    return split.reduce((a, b) => a + parseInt(b, 10), 0);
  }

  return null;
}

// Ef við viljum núna gera flóknari hluti, t.d. styðja mismunandi virkja, sviga,
// rétta röð aðgerða o.s.fr. getum við bætt við testum og vitað að fyrri virkni
// sé ennþá sú sama og við lögðum upp með.
// Getum líka refactorað kóðann okkar án þess að hafa áhyggjur af því að brjóta
// virkni óvart.
// Ef upp koma villur getum við byrjað á að búa til „failing test“ áður en við
// lögum, villan mun (að öllum líkindum!) aldrei koma upp aftur.
