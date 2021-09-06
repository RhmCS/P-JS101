document.getElementById("btnid").addEventListener("click", search);
document.getElementById("btntitle").addEventListener("click", search);
document.getElementById("btnauthor").addEventListener("click", search);
document.getElementById("btnbuy").addEventListener("click", buyBook);
document.getElementById("btnbuy").addEventListener("click", buyBook);
document.getElementById("btninvoice").addEventListener("click", print);

const books = [
  [1, "Start with why", "Simon Sinek", "80.0", "13"],
  [2, "But how do it know", "J.Clark Scott", "59.9", "22"],
  [3, "Clean Code", "Robert Cecil Martin", "50.0", "5"],
  [4, "Zero to One", "Peter Thiel", "45.0", "12"],
  [5, "You don't know JS", "Kyle Simpson", "39.9", "9"],
];

function search(event) {
  let buttonPressed = event.target.id;
  switch (buttonPressed) {
    case "btnid":
      getIDValue();
      break;
    case "btntitle":
      findBooks();
      break;
    case "btnauthor":
      findBooksByAuthor();
      break;
  }
}
function findBooksByAuthor() {
  var inputA = document.getElementById("bookA").value;
  for (var i = 0; i < books.length; i++) {
    for (var j = 0; j < books[i].length; j++) {
      if (books[j][2] == inputA) {
        document.getElementById("result").innerHTML =
          "<strong>" + books[j][1] + "</strong>";
        break;
      } else {
        document.getElementById("result").innerHTML =
          "<strong>" + "Your Book Not Found , Plese try again!" + "</strong>";
      }
    }
    break;
  }
  console.log(inputA);
  console.log(books.indexOf(inputA));
}

function findBooks() {
  var inputT = document.getElementById("bookT").value;
  for (var i = 0; i < books.length; i++) {
    for (var j = 0; j < books[i].length; j++) {
      if (books[j][1] == inputT) {
        document.getElementById("result").innerHTML =
          "<strong>" + inputT + "</strong>";
        break;
      } else {
        document.getElementById("result").innerHTML =
          "<strong>" + "Your Book Not Found , Plese try again!" + "</strong>";
      }
    }
    break;
  }
}

function viewBooks() {
  for (var i = 0; i < books.length; i++) {
    for (var j = 0; j < books[i].length; j++) {
      document.getElementById("books").innerHTML =
        "<strong>" + books[i][1] + "</strong>" + "<br>";
      console.log(books[i][1]);
    }
  }
}

function getIDValue() {

  var inputID = document.getElementById("idNum").value;
  if (inputID == 0 || inputID > books.length) {
    document.getElementById("result").innerHTML =
      "<strong>" + "Please enter another books ID !" + "</strong>";
  } else {
    var id = inputID - 1;
    console.log("ID  : " + id + " input user is = " + inputID);
    for (var i = 0; i < books.length; i++) {
      for (var j = 0; j < books[i].length; j++) {
        if (books[id][0] == inputID) {
          document.getElementById("result").innerHTML =
            "<strong>" + books[id][1] + "</strong>";
          break;
        }
      }
      break;
    }
  }
}

function buyBook() {
  const bookarr = [
    [1, "Start with why", 80.0, 13],
    [2, "But how do it know", 59.9, 22],
    [3, "Clean Code", 50.0, 5],
    [4, "Zero to One", 45.0, 12],
    [5, "You don't know JS", 39.9, 9],

  ];
  var bname = document.getElementById("bookname").value;
  var quantity = document.getElementById("bookQ").value;
  var price = document.getElementById("balance").value;

  var intP = parseInt(price, 10);
  var intQ = parseInt(quantity, 10);

  for (var i = 0; i < bookarr.length; i++) {
    for (var j = 0; j < bookarr[i].length; j++) {
      if (
        bookarr[i][1] === bname &&
        bookarr[i][3] >= intQ &&
        bookarr[i][2] * intQ <= intP
      ) {
        bookarr[i][3] = bookarr[i][3] - intQ;
        var total = bookarr[i][2] * intQ;
        document.getElementById("bookavail").innerHTML = "It's Availble !";
      }
      //  else {
      //   document.getElementById("bookavail").innerHTML = "It's Not Availble !";
      //  }
    }

  }

  return total;
}

function print() {
  var bname = document.getElementById("bookname").value;
  var quantity = document.getElementById("bookQ").value;
  document.getElementById("name").innerHTML =
    "<strong> Book Name  : " + bname + "<strong>";
  document.getElementById("amount").innerHTML =
    "<strong> Quantity : " + quantity + "<strong>";
  document.getElementById("price").innerHTML =
    "<strong> Price :  RS " + buyBook();
  +"<strong>";
}
