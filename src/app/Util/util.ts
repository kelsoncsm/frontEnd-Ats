export class Util {
  constructor() {}

  static FormataData(data: any) {
    var dia = data.substr(8,2);
    var mes = data.substr(5,2);
    var ano = data.substr(0,4);

    var d = new Date(
      ano + '-' + ('0' + mes).slice(-2) + '-' + ('0' + dia).slice(-2)
    );
    var utc = d.getTime() + d.getTimezoneOffset() * 60000;
    var nd = new Date(utc + 3600000 * 3);

    return nd;
  }
}
