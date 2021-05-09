 (() => {
     let getMonth = t => {
         var yyyy = t.getFullYear();
         var mm = ("00" + (t.getMonth() + 1)).slice(-2);
         return `${yyyy}/${mm}`;
     };
     let getDay = t => {
         var dd = ("00" + t.getDate()).slice(-2)
         var wday = '日月火水木金土'[t.getDay()]
         return `${dd}(${wday})`
     };
     let getTime = t => {
         let hh = ('00' + t.getHours()).slice(-2);
         let mm = ('00' + t.getMinutes()).slice(-2);
         let ss = ('00' + t.getSeconds()).slice(-2);
         return `${[hh, mm, ss].join(':')}`;
     };
     scrapbox.TimeStamp.addFormat(() => {
      	let date = new Date();
     	return `[${getMonth(date)}/${getDay(date)}] `;
     });
     scrapbox.TimeStamp.addFormat(() => {
     	let date = new Date();
         return `${getMonth(date)}/${getDay(date)} `;
     });
 })();
