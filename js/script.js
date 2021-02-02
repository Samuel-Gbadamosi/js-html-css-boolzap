var app = new Vue({
  el: '#app',
  data: {
    user: {
      // my acct
      name: 'Megan',
      avatar: '_io'
      // my acct

    },
    contacts: [
      // my contacts
      {
        name: 'Michele',
        avatar: '_1',
        visible: true,
        messages: [
          {
            date: '10/01/2020 15:30:55',
            text: 'hai portato a spasso il cane ?',
            status: 'sent'
          },
          {
            date: '10/01/2020 15:50:00',
            text: 'Ricordati di dargli da mangiare',
            status: 'sent'
          },
          {
            date: '10/01/2020 16:15:22',
            text: 'Tutto fatto!',
            status: 'received'
           }
        ],


      },
      {
        name: 'Fabio',
        avatar: '_2',
        visible: true,
        messages: [
          {
            date: '20/03/2020 16:30:00',
            text: 'Ciao come stai ?',
            status: 'sent'
          },
          {
            date: '20/03/2020 16:30:50',
            text: 'Bene grazie! Stasera ci vediamo ?',
            status: 'received'
          },
          {
            date: '10/01/2020 16:15:22',
            text: 'Mi piacerebbe ma devo andare a fare la spesa',
            status: 'sent'
           }
        ],


      },
      {
        name: 'Angela',
        avatar: '_3',
        visible: true,
        messages: [
          {
            date: '28/03/2020 10:10:40',
            text: 'La Marianna va in campagna',
            status: 'received'
          },
          {
            date: '28/03/2020 10:20:10',
            text: 'Sicuro di non aver sbagliato',
            status: 'sent'
          },
          {
            date: '28/03/2020 16:15:22',
            text: 'Ah scusa!',
            status: 'received'
           }
        ],


      },
    ]




  }
  // end data
});
