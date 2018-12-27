
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
        "id": 1,
        "name": "Lilly Boyd",
        "email": "lillyboyd@hawkster.com",
        "password_digest": "5bffec6b9549c90282672beb"
        },
        {
        "id": 2,
        "name": "Gail Marshall",
        "email": "gailmarshall@hawkster.com",
        "password_digest": "5bffec6b67ecaf6a8ab94963"
        },
        {
        "id": 3,
        "name": "Jean Pollard",
        "email": "jeanpollard@hawkster.com",
        "password_digest": "5bffec6b5536151daf23851b"
        },
        {
        "id": 4,
        "name": "Deanna Moore",
        "email": "deannamoore@hawkster.com",
        "password_digest": "5bffec6b1356b9536a2d66d4"
        },
        {
        "id": 5,
        "name": "Collier Acevedo",
        "email": "collieracevedo@hawkster.com",
        "password_digest": "5bffec6b151013b582a54490"
        },
        {
        "id": 6,
        "name": "Stacy Rosario",
        "email": "stacyrosario@hawkster.com",
        "password_digest": "5bffec6b6f73570a77e1fc66"
        },
        {
        "id": 7,
        "name": "Bush Richmond",
        "email": "bushrichmond@hawkster.com",
        "password_digest": "5bffec6b082beacd6af3cb34"
        },
        {
        "id": 8,
        "name": "Ward Fuentes",
        "email": "wardfuentes@hawkster.com",
        "password_digest": "5bffec6bc16fed8bcc58938a"
        },
        {
        "id": 9,
        "name": "Sellers Mcguire",
        "email": "sellersmcguire@hawkster.com",
        "password_digest": "5bffec6b913280f8c04ef77f"
        },
        {
        "id": 10,
        "name": "Roseann Hendrix",
        "email": "roseannhendrix@hawkster.com",
        "password_digest": "5bffec6bd5ab48b46f790e37"
        },
        {
        "id": 11,
        "name": "Ines Cash",
        "email": "inescash@hawkster.com",
        "password_digest": "5bffec6bd6cc751ee5887be2"
        },
        {
        "id": 12,
        "name": "Lacy Fry",
        "email": "lacyfry@hawkster.com",
        "password_digest": "5bffec6b614b870e07f9d786"
        },
        {
        "id": 13,
        "name": "Ginger Conrad",
        "email": "gingerconrad@hawkster.com",
        "password_digest": "5bffec6bcb5cd3c78d7e8adb"
        },
        {
        "id": 14,
        "name": "Pearl Witt",
        "email": "pearlwitt@hawkster.com",
        "password_digest": "5bffec6bf6c622f088711191"
        },
        {
        "id": 15,
        "name": "Bailey Porter",
        "email": "baileyporter@hawkster.com",
        "password_digest": "5bffec6bf33409c12f9225d0"
        },
        {
        "id": 16,
        "name": "Parks Blackburn",
        "email": "parksblackburn@hawkster.com",
        "password_digest": "5bffec6bda8c08f7141aebde"
        },
        {
        "id": 17,
        "name": "Therese Dillon",
        "email": "theresedillon@hawkster.com",
        "password_digest": "5bffec6b48908e1786edad56"
        },
        {
        "id": 18,
        "name": "Craft Merrill",
        "email": "craftmerrill@hawkster.com",
        "password_digest": "5bffec6bd2dacd3a688da82f"
        },
        {
        "id": 19,
        "name": "Levine Burnett",
        "email": "levineburnett@hawkster.com",
        "password_digest": "5bffec6bfca1486fde95f5d4"
        },
        {
        "id": 20,
        "name": "Ratliff Tucker",
        "email": "ratlifftucker@hawkster.com",
        "password_digest": "5bffec6b0b9bb8fd22455b40"
        },
        {
        "id": 21,
        "name": "Chambers Walls",
        "email": "chamberswalls@hawkster.com",
        "password_digest": "5bffec6b0421debb45689178"
        },
        {
        "id": 22,
        "name": "Dixon Franco",
        "email": "dixonfranco@hawkster.com",
        "password_digest": "5bffec6beea15a4f18711688"
        },
        {
        "id": 23,
        "name": "Aurora Whitley",
        "email": "aurorawhitley@hawkster.com",
        "password_digest": "5bffec6b7339ff34ab2253ab"
        }

      ]);
    });
};
