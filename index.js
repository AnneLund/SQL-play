const mysql = require('mysql');

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'anne',
    database: 'webshop'
});

con.connect(err => {
    if (err) throw err;
    console.log("Forbindelse oprettet!")
   
//     1. //Jeg henter alle kunderne i alfabetisk rækkefølge

//     con.query("SELECT * FROM customers ORDER BY cname", function (err, result, fields) {
//           if (err) throw err;
//           console.log(result);
// })

//     // 2. //Jeg henter de sidste to kunder
//     con.query("SELECT * FROM customers ORDER BY cid DESC LIMIT 2", function (err, result, fields) {
//         if (err) throw err;
//         console.log(result);
// })

//     // 3. //Jeg henter id'er på de første 5 kunder sorteret faldende efter navn
//     con.query("SELECT * FROM customers WHERE cid ORDER BY cname DESC LIMIT 5", function (err, result, fields) {
//         if (err) throw err;
//         console.log(result);
// })

//     // 4. //Jeg henter navnet på id4
//     con.query("SELECT cname FROM customers WHERE cid = 4", function (err, result, fields) {
//         if (err) throw err;
//         console.log(result);
// })

//     // 5. //Jeg henter Daniel
//     con.query("SELECT cname FROM customers WHERE cname = 'Daniel", function (err, result, fields) {
//         if (err) throw err;
//         console.log(result);
// })

//     // 6. //Jeg henter navn og adresse på alle
//     con.query("SELECT cname, address FROM customers", function (err, result, fields) {
//         if (err) throw err;
//         console.log(result);
// })

//     // 7. //Henter mit telefonnummer
//     con.query("SELECT phone FROM customers WHERE cname = 'Anne'", function (err, result, fields) {
//         if (err) throw err;
//         console.log(result);
// })

//     // 8. //Jeg opdaterer adressen på id 7, med en ny adresse
//     con.query("UPDATE customers SET address = 'Nyadresse 6'  WHERE address = 'Årestrupsvej 33, 1tv' ", function (err, result, fields) {
//         if (err) throw err;
//         console.log(result);
// })

//     // 9. //Jeg indsætter 5 nye kunder i databasen
//     let sql = "INSERT INTO customers (cname, address, cid, email, phone) VALUES?";
//     const values = [
// ['Betty', 'Johannesvej 12', '13', 'betty@techcollege.dk', '58476315'],
// ['Susanne', 'Jordbærvej 54', '15', 'susanne@techcollege.dk', '21456587'],
// ['Martin', 'Lakridsvej 90', '14', 'martin@techcollege.dk', '41257896'],
// ['Kim', 'Gulerodsvej 76', '16', 'kim@techcollege.dk', '41255748'],
// ['Eva', 'Regnbuegade 1', '17', 'eva@techcollege.dk', '44112255']
//     ];
//     con.query(sql, [values], function (err, result, fields) {
//         if (err) throw err;
//         console.log(result);
// })

//     // 10. //Jeg sletter en kunde
//     con.query("DELETE FROM customers WHERE cid = 5 ", function (err, result, fields) {
//         if (err) throw err;
//         console.log(result);
// })

    con.query("SELECT * FROM customers ORDER BY email", function (err, result, fields) {
          if (err) throw err;
          console.log(result);
})

});
