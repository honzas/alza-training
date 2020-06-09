const boardsData = [{
    id: 'board-1',
    name: 'M6 board',
    tickets: ['m6-1', 'm6-2', 'm6-3']
  },
  {
    id: 'board-2',
    name: 'FIN board',
    tickets: ['fin-1']
  },
  {
    id: 'board-3',
    name: 'LOG board',
    tickets: ['log-1']
  }
];

const ticketsData = [{
    id: 'm6-1',
    name: 'ticket-1',
    priority: 10,
    estimate: 1000,
    status: 'done',
    subtickets: [{
      id: 'm6-1-sub-1',
      name: 'subticket-1',
      priority: 1,
      estimate: 1000,
      status: 'done'
    }]
  },
  {
    id: 'm6-2',
    name: 'ticket-2',
    priority: 2,
    estimate: 600,
    status: 'in progress'
  },
  {
    id: 'm6-3',
    name: 'ticket-3',
    priority: 6,
    estimate: 400,
    status: 'open'
  },
  {
    id: 'fin-1',
    name: 'ticket-4',
    priority: 3,
    estimate: 300,
    status: 'open'
  },
  {
    id: 'log-1',
    name: 'ticket-5',
    priority: 2,
    estimate: 1500,
    status: 'open'
  },
]

const jiraBoards = (boards, tickets) => {
  // Clean all dashboards (tickets with status ‘done’)
  const cleanDoneTickets = (boards, tickets) => {
    console.log('Clean all dashboards (tickets with status ‘done’):');

    tickets.forEach(ticket => {
      if (ticket.status === 'done') {
        boards.forEach(board => {
          console.log(`${board.name}:`);
          console.log('Before:');
          console.log(board.tickets);

          board.tickets.forEach(boardTicketId => {
            if (ticket.id === boardTicketId) {
              board.tickets.splice(boardTicketId, 1);
            }
          })

          console.log('After:');
          console.log(board.tickets);
        });
      }
    });
  }

  // Move command – move ticket with given id from origin board to target board (you need to make sure, that priorities will be unique in target board)
  const moveTicket = (boards, tickets) => {

  }

  // Print board with ticket details based on ticket priority
  const ticketDetailsByPriority = (boards, tickets) => {
    boards.forEach(board => {
      let ticketList = [];
      board.tickets.forEach(boardTicketId => {
        tickets.forEach(ticket => {

          if (ticket.id === boardTicketId) {
            ticketList.push(ticket);
          }
        });
      });

      ticketList.sort((a, b) => (a.priority < b.priority) ? 1 : -1);

      console.log('');
      console.log(`${board.name}:`);
      console.log(ticketList);
    });
  }

  // Calculate total estimate time for each board
  const totalEstimate = (boards, tickets) => {
    console.log('Calculate total estimate time for each board.');

    boards.forEach(board => {
      let totalBoardEstimate = 0;

      board.tickets.forEach(boardTicketId => {
        tickets.forEach(ticket => {
          if (ticket.hasOwnProperty('estimate')) {
            if (ticket.id === boardTicketId) {
              totalBoardEstimate += ticket.estimate;
            }
          }
        });
      })

      console.log(`${board.name}: ${totalBoardEstimate}`);
    });
  }

  // Tickets can have subtickets – implement 2 actions above, to take subtickets into account
  //

  cleanDoneTickets(boards, tickets);
  console.log('')
  ticketDetailsByPriority(boards, tickets);
  console.log('')
  totalEstimate(boards, tickets);
}

jiraBoards(boardsData, ticketsData);
