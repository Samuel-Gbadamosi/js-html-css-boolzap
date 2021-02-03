var app = new Vue({
  el: '#app',
  data: {
    counter: 0,
    newrAy: [],
    user: [{
      // my acct
      name: 'Megan',
      avatar: 'img 2/avatar_io.jpg',
      visible: true
      // my acct

    }],
    contacts: [
      // my contacts
      {
        name: 'bryan',
        avatar: 'img 2/avatar_1.jpg',
        visible: true,
        messages: [{
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
        avatar: 'img 2/avatar_2.jpg',
        visible: true,
        messages: [{
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
        avatar: 'img 2/avatar_2.jpg',
        visible: true,
        messages: [{
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
      {
        name: 'james',
        avatar: 'img 2/avatar_5.jpg',
        visible: true,
        messages: [{
            date: '10/01/2020 15:30:00',
            text: 'lo sai che ha aperto una nuova pizzera?',
            status: 'sent'
          },
          {
            date: '20/03/2020 16:30:50',
            text: 'si ma preferirie andare al cinema',
            status: 'received'
          }

        ]


      }
    ],

  },
  // end data
  methods:{
    buttonS(index){
      this.counter = index;

        console.log(index);
    }
  }
});
