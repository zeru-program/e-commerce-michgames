/* globals Chart:false */

(() => {
  'use strict'

  // Graphs
  const ctx = document.getElementById('myChart')
  // eslint-disable-next-line no-unused-vars
  const myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
      ],
      datasets: [{
        data: [
          15339,
          21345,
          18483,
          24003,
          23489,
          24092,
          12034
        ],
        lineTension: 0,
        backgroundColor: 'transparent',
        borderColor: '#007bff',
        borderWidth: 4,
        pointBackgroundColor: '#007bff'
      }]
    },
    options: {
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          boxPadding: 3
        }
      }
    }
  })
})()








// do get read the datas and print it
fetch('https://script.google.com/macros/s/AKfycbyrvfjKgc9XUzXizd7eGypoaWOvaW3VAxz1e3qnEScraBQ6a-Iy8bb_ofRPYdkTVTnp/exec')
  .then(res => res.json())
  .then(data => {
      const tableBody = document.getElementById('table-body');

    // Mulai dari indeks 1 untuk mengabaikan data pertama
    data.content.slice(1).forEach(row => {
       const rowTab = document.createElement('tr');
        rowTab.innerHTML = `
          <td>${row[0]}</td>
          <td>${row[1]}</td>
          <td>${row[2]}</td>
          <td>${row[3]}</td>
          <td>${row[4]}</td>
        `;
        tableBody.appendChild(rowTab);
      
    })
  })
  .catch(e => console.error('fail', error.message))
  
  



/*function delAccount(email) {
  fetch('https://sheetdb.io/api/v1/yf0879y48ha98/Email/' + email, {
    method: 'DELETE',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
})
  .then((response) => response.json())
  .then((data) => location.reload())
  
}
*/
  // Render the table when the page loads
  //window.onload = renderTable;
  
  

