import { listaAvera } from "./Avera/totale/totale";
import { listaBancaSella } from "./BancaSella/totale/totale";
import { BancoBPM } from "./BancoBPM/totale/totaleBanco";
import { listaBBVA } from "./bbva/totale/totale";
import { listaBNL } from "./BNL/totale/totale";
import { listaBper } from "./bper/totale/totale";
import { listaCheBanca } from "./cheBanca/totale/totale";
import { listaCredem } from "./credem/totale/totale";
import { listaCreditAgricole } from "./creditagricole/totale/mutui";
import { listaDesio } from "./Desio/totale/totale";
import { listaIng } from "./ing/totale/totale";
import { listaMutuiNuovi } from "./intesa/80-100/intesa.80-100";
import { listaMutuiIntesa } from "./intesa/listaMutuiIntesa";
import { listaMPS } from "./mps/totale/totale";
import { listaUnicredit } from "./Unicredit/totale/totale";
import { listaWeBank } from "./webank/totale /listaTo";

export const listaMutuiFinale = [...listaMutuiIntesa, ...listaCreditAgricole, ...listaWeBank, ...listaBper, ...BancoBPM, ...listaBancaSella, ...listaAvera, ...listaIng, ...listaBNL, ...listaBBVA, ...listaMPS, ...listaCredem, ...listaUnicredit, ...listaDesio, ...listaCheBanca];


