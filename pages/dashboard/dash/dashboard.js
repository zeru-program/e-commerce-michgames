/* globals Chart:false */

(() => {
    "use strict";

    // Graphs
    const ctx = document.getElementById("myChart");
    // eslint-disable-next-line no-unused-vars
    const myChart = new Chart(ctx, {
        type: "line",
        data: {
            labels: [
                "Sunday",
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday"
            ],
            datasets: [
                {
                    data: [15339, 21345, 18483, 24003, 23489, 24092, 12034],
                    lineTension: 0,
                    backgroundColor: "transparent",
                    borderColor: "#007bff",
                    borderWidth: 4,
                    pointBackgroundColor: "#007bff"
                }
            ]
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
    });
})();

// do get read the datas and print it
fetch("https://michstore-all-default-rtdb.firebaseio.com/account.json")
    .then(res => res.json())
    .then(data => {
        const tableBody = document.getElementById("table-body");

        for (let key in data) {
            var val = data[key];

            const rowTab = document.createElement("tr");
            rowTab.innerHTML = `
          <td>${val.id}</td>
          <td>${val.Username}</td>
          <td>${val.Name}</td>
          <td>${val.Email}</td>
          <td>${val.Password}</td>
          <td><button onclick="editAcc('${key}', this)">EDIT</button><button onclick="deleteAcc('${key}')">DELETE</button></td>
        `;
            tableBody.appendChild(rowTab);
        }
    })
    .catch(e => console.error("fail", error.message));

function deleteAcc(id) {
    fetch(
        "https://michstore-all-default-rtdb.firebaseio.com/account/" +
            id +
            ".json",
        {
            method: "DELETE"
        }
    )
        .then(res => {
            if (res.ok) {
                alert("sukses hapus");
                location.reload();
            } else {
                alert("gagal hapus");
            }
        })
        .catch(e => console.error(e));
}

function openAkunC() {
    document.getElementById("divCreateAcc").classList.add("d-flex");
    document.getElementById("divCreateAcc").classList.remove("d-none");
}
function closeDivAcc() {
    document.getElementById("divCreateAcc").classList.add("d-none");
    document.getElementById("divCreateAcc").classList.remove("d-flex");
}
document.getElementById("form-create-acc").addEventListener("submit", e => {
    e.preventDefault();
    const usn = document.getElementById("usn-acc").value;
    const nm = document.getElementById("name-acc").value;
    const eml = document.getElementById("email-acc").value;
    const pw = document.getElementById("pw-acc").value;

    fetch("https://michstore-all-default-rtdb.firebaseio.com/account.json")
        .then(res => res.json())
        .then(data => {
            let lengthData = 0;
            for (let key in data) {
                lengthData++;
            }
            var nextId = lengthData + 1;

            var datas = {
                id: nextId,
                Username: usn,
                Name: nm,
                Email: eml,
                Password: pw
            };

            fetch(
                "https://michstore-all-default-rtdb.firebaseio.com/account.json",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(datas)
                }
            )
                .then(res => {
                    if (res.ok) {
                        alert("sukses menambahkan akun");
                        location.reload();
                    } else {
                        alert("gagal menambahkan akun");
                    }
                })
                .catch(e => console.error(error.message));
        })
        .catch(e => console.error(error.message));
});

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

// update function
function editAcc(uniqueId, elem) {
    var siblingTd = elem.parentElement.parentElement.getElementsByTagName("td");
    for (var i = 0; i < siblingTd.length - 1; i++) {
        siblingTd[i].contentEditable = true;
        siblingTd[i].classList.add("temp-update-class");
    }
    elem.setAttribute("onclick", `updateNowAcc('${uniqueId}')`);
    elem.innerHTML = "SAVE";
}
function updateNowAcc(uniqueId) {
    var contentId = document.querySelectorAll(".temp-update-class");
    var obj = {
        id: contentId[0].textContent,
        Username: contentId[1].textContent,
        Name: contentId[2].textContent,
        Email: contentId[3].textContent,
        Password: contentId[4].textContent
    };
    var listRef = database.ref("account/" + uniqueId).update(obj);
   if (listRef) {
     alert('data di update')
    location.reload();
   } else {
     alert('gagal update')
   }
}

function editNotif(uniqueId, elem) {
    var siblingTd = elem.parentElement.parentElement.getElementsByTagName("td");
    for (var i = 0; i < siblingTd.length - 1; i++) {
        siblingTd[i].contentEditable = true;
        siblingTd[i].classList.add("temp-update-class");
    }
    elem.setAttribute("onclick", `updateNowNotif('${uniqueId}')`);
    elem.innerHTML = "SAVE";
}
// create updateNow function
function updateNowNotif(uniqueId) {
    var contentId = document.querySelectorAll(".temp-update-class");
    var obj = {
        id: contentId[0].textContent,
        judul: contentId[1].textContent,
        message: contentId[2].textContent,
        date: contentId[3].textContent,
        display: contentId[4].textContent
    };
    var listRef = database.ref("notification/" + uniqueId).update(obj);
   if (listRef) {
     alert('data di update')
    location.reload();
   } else {
     alert('gagal update')
   }
}
