const cards =    [
	{
		"title": "Brody, Minerva, Yoshi, Richard",
		"date": "08.13.21",
		"time": "00:00",
		"msg": 4,
		"description": "volutpat ornare, facilisis eget, ipsum. Donec sollicitudin adipiscing ligula. Aenean",
		"reverse": false
	},
	{
		"title": "Leilani, Isabella, Eve, Beatrice",
		"date": "11.25.19",
		"time": "00:00",
		"msg": 6,
		"description": "mi lacinia mattis. Integer eu lacus. Quisque imperdiet, erat nonummy",
		"reverse": true
	},
	{
		"title": "Aubrey, Regan, Rahim, Courtney",
		"date": "04.05.21",
		"time": "00:00",
		"msg": 1,
		"description": "ligula consectetuer rhoncus. Nullam velit dui, semper et, lacinia vitae,",
		"reverse": false
	},
	{
		"title": "Sylvester, Lionel, Alexis, Bryar",
		"date": "03.13.20",
		"time": "00:00",
		"msg": 9,
		"description": "Aliquam gravida mauris ut mi. Duis risus odio, auctor vitae,",
		"reverse": false
	},
	{
		"title": "Alvin, Hunter, Simone, Clarke",
		"date": "05.14.21",
		"time": "00:00",
		"msg": 7,
		"description": "in faucibus orci luctus et ultrices posuere cubilia Curae; Phasellus",
		"reverse": false
	},
	{
		"title": "Idona, Cadman, Cody, Phelan",
		"date": "03.09.21",
		"time": "00:00",
		"msg": 3,
		"description": "lorem, auctor quis, tristique ac, eleifend vitae, erat. Vivamus nisi.",
		"reverse": false
	},
	{
		"title": "Ella, Eleanor, Venus, Amery",
		"date": "03.26.21",
		"time": "00:00",
		"msg": 10,
		"description": "dictum eu, placerat eget, venenatis a, magna. Lorem ipsum dolor",
		"reverse": true
	},
	{
		"title": "Hermione, Keegan, Kylan, Ignacia",
		"date": "11.26.19",
		"time": "00:00",
		"msg": 8,
		"description": "aliquet, sem ut cursus luctus, ipsum leo elementum sem, vitae",
		"reverse": true
	},
	{
		"title": "Lyle, Edan, Riley, Nichole",
		"date": "11.10.20",
		"time": "00:00",
		"msg": 2,
		"description": "augue malesuada malesuada. Integer id magna et ipsum cursus vestibulum.",
		"reverse": false
	},
	{
		"title": "Clarke, Camille, Cathleen, Gavin",
		"date": "07.28.21",
		"time": "00:00",
		"msg": 6,
		"description": "lorem ipsum sodales purus, in molestie tortor nibh sit amet",
		"reverse": false
	},
	{
		"title": "Chanda, Latifah, Barry, Phelan",
		"date": "09.13.20",
		"time": "00:00",
		"msg": 6,
		"description": "natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
		"reverse": true
	},
	{
		"title": "Felix, Marvin, Daryl, Burke",
		"date": "01.12.21",
		"time": "00:00",
		"msg": 4,
		"description": "neque. Nullam nisl. Maecenas malesuada fringilla est. Mauris eu turpis.",
		"reverse": true
	},
	{
		"title": "Marshall, Cedric, Kaye, Ella",
		"date": "12.27.20",
		"time": "00:00",
		"msg": 10,
		"description": "Integer eu lacus. Quisque imperdiet, erat nonummy ultricies ornare, elit",
		"reverse": false
	},
	{
		"title": "Renee, Dawn, Lars, Leila",
		"date": "02.12.20",
		"time": "00:00",
		"msg": 8,
		"description": "Vestibulum ut eros non enim commodo hendrerit. Donec porttitor tellus",
		"reverse": false
	},
	{
		"title": "Medge, Whitney, Grant, Micah",
		"date": "05.15.20",
		"time": "00:00",
		"msg": 1,
		"description": "ac, eleifend vitae, erat. Vivamus nisi. Mauris nulla. Integer urna.",
		"reverse": true
	},
	{
		"title": "Amela, Iona, McKenzie, Murphy",
		"date": "04.01.21",
		"time": "00:00",
		"msg": 3,
		"description": "justo nec ante. Maecenas mi felis, adipiscing fringilla, porttitor vulputate,",
		"reverse": true
	},
	{
		"title": "Gillian, Tallulah, Cyrus, Jacqueline",
		"date": "03.11.20",
		"time": "00:00",
		"msg": 7,
		"description": "tempus, lorem fringilla ornare placerat, orci lacus vestibulum lorem, sit",
		"reverse": true
	},
	{
		"title": "Tana, Destiny, Cassidy, Kirestin",
		"date": "08.25.21",
		"time": "00:00",
		"msg": 3,
		"description": "Nulla dignissim. Maecenas ornare egestas ligula. Nullam feugiat placerat velit.",
		"reverse": true
	},
	{
		"title": "Kelly, Octavius, Keely, Kyla",
		"date": "12.22.19",
		"time": "00:00",
		"msg": 10,
		"description": "volutpat. Nulla dignissim. Maecenas ornare egestas ligula. Nullam feugiat placerat",
		"reverse": true
	},
	{
		"title": "Zelda, Iola, Rigel, Ashton",
		"date": "02.06.20",
		"time": "00:00",
		"msg": 5,
		"description": "congue, elit sed consequat auctor, nunc nulla vulputate dui, nec",
		"reverse": true
	},
	{
		"title": "Caldwell, Ulric, Maxine, Fallon",
		"date": "01.03.21",
		"time": "00:00",
		"msg": 6,
		"description": "Quisque ac libero nec ligula consectetuer rhoncus. Nullam velit dui,",
		"reverse": true
	},
	{
		"title": "Alice, Calvin, Noble, Arden",
		"date": "09.10.21",
		"time": "00:00",
		"msg": 8,
		"description": "fermentum convallis ligula. Donec luctus aliquet odio. Etiam ligula tortor,",
		"reverse": true
	},
	{
		"title": "Dennis, Hector, Aquila, Shad",
		"date": "01.25.20",
		"time": "00:00",
		"msg": 8,
		"description": "egestas a, scelerisque sed, sapien. Nunc pulvinar arcu et pede.",
		"reverse": true
	},
	{
		"title": "Garrett, Byron, Ifeoma, Cyrus",
		"date": "06.22.21",
		"time": "00:00",
		"msg": 3,
		"description": "Nunc pulvinar arcu et pede. Nunc sed orci lobortis augue",
		"reverse": true
	},
	{
		"title": "May, Walker, Sonia, Nigel",
		"date": "10.10.20",
		"time": "00:00",
		"msg": 3,
		"description": "parturient montes, nascetur ridiculus mus. Proin vel nisl. Quisque fringilla",
		"reverse": false
	},
	{
		"title": "Raven, Neil, Michael, Shana",
		"date": "04.28.21",
		"time": "00:00",
		"msg": 2,
		"description": "adipiscing, enim mi tempor lorem, eget mollis lectus pede et",
		"reverse": true
	},
	{
		"title": "Wayne, Igor, Kenyon, Simon",
		"date": "01.15.20",
		"time": "00:00",
		"msg": 3,
		"description": "ad litora torquent per conubia nostra, per inceptos hymenaeos. Mauris",
		"reverse": true
	},
	{
		"title": "Drake, Ivana, Kasimir, Colin",
		"date": "08.13.20",
		"time": "00:00",
		"msg": 2,
		"description": "sapien. Cras dolor dolor, tempus non, lacinia at, iaculis quis,",
		"reverse": true
	},
	{
		"title": "Lisandra, Mark, Azalia, Curran",
		"date": "10.10.20",
		"time": "00:00",
		"msg": 9,
		"description": "Proin ultrices. Duis volutpat nunc sit amet metus. Aliquam erat",
		"reverse": false
	},
	{
		"title": "Matthew, Carla, Alec, Cameran",
		"date": "05.30.20",
		"time": "00:00",
		"msg": 9,
		"description": "magnis dis parturient montes, nascetur ridiculus mus. Aenean eget magna.",
		"reverse": true
	},
	{
		"title": "Suki, Cheyenne, Echo, Bradley",
		"date": "02.06.21",
		"time": "00:00",
		"msg": 6,
		"description": "aliquet diam. Sed diam lorem, auctor quis, tristique ac, eleifend",
		"reverse": false
	},
	{
		"title": "Hillary, Zorita, Deborah, Hedda",
		"date": "09.13.20",
		"time": "00:00",
		"msg": 1,
		"description": "sem. Nulla interdum. Curabitur dictum. Phasellus in felis. Nulla tempor",
		"reverse": true
	},
	{
		"title": "Lucas, William, Zeus, Cade",
		"date": "08.15.21",
		"time": "00:00",
		"msg": 5,
		"description": "ornare egestas ligula. Nullam feugiat placerat velit. Quisque varius. Nam",
		"reverse": true
	},
	{
		"title": "Zachary, Jessica, Bell, Erasmus",
		"date": "06.21.20",
		"time": "00:00",
		"msg": 3,
		"description": "malesuada fringilla est. Mauris eu turpis. Nulla aliquet. Proin velit.",
		"reverse": false
	},
	{
		"title": "Candice, Galena, Carlos, Chase",
		"date": "08.22.21",
		"time": "00:00",
		"msg": 7,
		"description": "mauris. Suspendisse aliquet molestie tellus. Aenean egestas hendrerit neque. In",
		"reverse": true
	},
	{
		"title": "Autumn, Rashad, Graham, Elvis",
		"date": "01.23.21",
		"time": "00:00",
		"msg": 9,
		"description": "augue, eu tempor erat neque non quam. Pellentesque habitant morbi",
		"reverse": true
	},
	{
		"title": "Rebekah, Dai, Kimberly, Quincy",
		"date": "06.11.21",
		"time": "00:00",
		"msg": 8,
		"description": "nibh vulputate mauris sagittis placerat. Cras dictum ultricies ligula. Nullam",
		"reverse": false
	},
	{
		"title": "Hector, Chelsea, Samson, Kamal",
		"date": "08.29.20",
		"time": "00:00",
		"msg": 10,
		"description": "magnis dis parturient montes, nascetur ridiculus mus. Donec dignissim magna",
		"reverse": true
	},
	{
		"title": "Kelly, Plato, Odysseus, Zelda",
		"date": "01.11.20",
		"time": "00:00",
		"msg": 6,
		"description": "id risus quis diam luctus lobortis. Class aptent taciti sociosqu",
		"reverse": true
	},
	{
		"title": "Gregory, Tad, Aidan, Sheila",
		"date": "06.04.21",
		"time": "00:00",
		"msg": 8,
		"description": "at augue id ante dictum cursus. Nunc mauris elit, dictum",
		"reverse": false
	},
	{
		"title": "Yvonne, Cedric, Xyla, Thaddeus",
		"date": "11.14.21",
		"time": "00:00",
		"msg": 6,
		"description": "fermentum convallis ligula. Donec luctus aliquet odio. Etiam ligula tortor,",
		"reverse": true
	},
	{
		"title": "Paula, Wanda, Nathaniel, Larissa",
		"date": "01.26.20",
		"time": "00:00",
		"msg": 5,
		"description": "ullamcorper, nisl arcu iaculis enim, sit amet ornare lectus justo",
		"reverse": true
	},
	{
		"title": "Rashad, Urielle, Stacey, Alexis",
		"date": "12.24.19",
		"time": "00:00",
		"msg": 7,
		"description": "nonummy. Fusce fermentum fermentum arcu. Vestibulum ante ipsum primis in",
		"reverse": false
	},
	{
		"title": "Burton, Tanya, Demetrius, Wynne",
		"date": "05.30.21",
		"time": "00:00",
		"msg": 5,
		"description": "imperdiet, erat nonummy ultricies ornare, elit elit fermentum risus, at",
		"reverse": false
	},
	{
		"title": "Odysseus, Ignacia, Upton, Donna",
		"date": "09.16.21",
		"time": "00:00",
		"msg": 8,
		"description": "nec orci. Donec nibh. Quisque nonummy ipsum non arcu. Vivamus",
		"reverse": true
	},
	{
		"title": "Tallulah, Dolan, Sloane, Maxine",
		"date": "08.01.20",
		"time": "00:00",
		"msg": 5,
		"description": "libero mauris, aliquam eu, accumsan sed, facilisis vitae, orci. Phasellus",
		"reverse": false
	},
	{
		"title": "Yardley, Sawyer, Wendy, Jaime",
		"date": "02.09.21",
		"time": "00:00",
		"msg": 5,
		"description": "a purus. Duis elementum, dui quis accumsan convallis, ante lectus",
		"reverse": true
	},
	{
		"title": "Kibo, Dora, Fatima, Tyler",
		"date": "03.24.21",
		"time": "00:00",
		"msg": 10,
		"description": "ipsum nunc id enim. Curabitur massa. Vestibulum accumsan neque et",
		"reverse": true
	},
	{
		"title": "Edward, Astra, Iliana, Rhiannon",
		"date": "10.01.21",
		"time": "00:00",
		"msg": 7,
		"description": "massa. Mauris vestibulum, neque sed dictum eleifend, nunc risus varius",
		"reverse": false
	},
	{
		"title": "Erin, Kessie, Hanna, Caleb",
		"date": "10.13.21",
		"time": "00:00",
		"msg": 5,
		"description": "tempus eu, ligula. Aenean euismod mauris eu elit. Nulla facilisi.",
		"reverse": false
	},
	{
		"title": "Cameron, Kyra, Sarah, Jillian",
		"date": "01.15.20",
		"time": "00:00",
		"msg": 3,
		"description": "pede. Suspendisse dui. Fusce diam nunc, ullamcorper eu, euismod ac,",
		"reverse": true
	},
	{
		"title": "Macon, Hakeem, Brandon, Alexis",
		"date": "09.16.21",
		"time": "00:00",
		"msg": 6,
		"description": "pharetra nibh. Aliquam ornare, libero at auctor ullamcorper, nisl arcu",
		"reverse": false
	},
	{
		"title": "Tyler, Adrian, Akeem, Lavinia",
		"date": "07.04.21",
		"time": "00:00",
		"msg": 9,
		"description": "dictum. Phasellus in felis. Nulla tempor augue ac ipsum. Phasellus",
		"reverse": true
	},
	{
		"title": "Donna, Anjolie, Kai, Zia",
		"date": "01.09.21",
		"time": "00:00",
		"msg": 9,
		"description": "torquent per conubia nostra, per inceptos hymenaeos. Mauris ut quam",
		"reverse": true
	},
	{
		"title": "May, Cameron, Ivana, Lysandra",
		"date": "06.02.20",
		"time": "00:00",
		"msg": 5,
		"description": "mauris eu elit. Nulla facilisi. Sed neque. Sed eget lacus.",
		"reverse": true
	},
	{
		"title": "Baker, Mufutau, Colleen, Brody",
		"date": "10.18.20",
		"time": "00:00",
		"msg": 6,
		"description": "mi eleifend egestas. Sed pharetra, felis eget varius ultrices, mauris",
		"reverse": true
	},
	{
		"title": "Francis, Brooke, Ashton, Phelan",
		"date": "03.20.20",
		"time": "00:00",
		"msg": 8,
		"description": "ligula. Nullam feugiat placerat velit. Quisque varius. Nam porttitor scelerisque",
		"reverse": true
	},
	{
		"title": "Lunea, Ray, Byron, Marvin",
		"date": "07.12.21",
		"time": "00:00",
		"msg": 8,
		"description": "natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
		"reverse": true
	},
	{
		"title": "Demetria, Reagan, Virginia, Yasir",
		"date": "09.16.21",
		"time": "00:00",
		"msg": 4,
		"description": "scelerisque neque. Nullam nisl. Maecenas malesuada fringilla est. Mauris eu",
		"reverse": false
	},
	{
		"title": "Reese, Maryam, Ifeoma, Joel",
		"date": "07.19.21",
		"time": "00:00",
		"msg": 7,
		"description": "et, rutrum non, hendrerit id, ante. Nunc mauris sapien, cursus",
		"reverse": true
	},
	{
		"title": "Raphael, Solomon, Samson, Reuben",
		"date": "12.25.20",
		"time": "00:00",
		"msg": 10,
		"description": "porttitor tellus non magna. Nam ligula elit, pretium et, rutrum",
		"reverse": true
	},
	{
		"title": "Dai, Quail, Yvonne, Francis",
		"date": "07.06.20",
		"time": "00:00",
		"msg": 10,
		"description": "fringilla est. Mauris eu turpis. Nulla aliquet. Proin velit. Sed",
		"reverse": true
	},
	{
		"title": "Randall, Portia, Cyrus, Ivor",
		"date": "06.27.20",
		"time": "00:00",
		"msg": 7,
		"description": "neque. Sed eget lacus. Mauris non dui nec urna suscipit",
		"reverse": true
	},
	{
		"title": "Nayda, Uriel, Talon, Britanni",
		"date": "01.30.21",
		"time": "00:00",
		"msg": 6,
		"description": "augue id ante dictum cursus. Nunc mauris elit, dictum eu,",
		"reverse": false
	},
	{
		"title": "Ava, Thane, Kiona, Tatyana",
		"date": "01.08.21",
		"time": "00:00",
		"msg": 8,
		"description": "tellus. Phasellus elit pede, malesuada vel, venenatis vel, faucibus id,",
		"reverse": true
	},
	{
		"title": "Cora, Zachery, Ann, Brendan",
		"date": "10.13.21",
		"time": "00:00",
		"msg": 10,
		"description": "risus quis diam luctus lobortis. Class aptent taciti sociosqu ad",
		"reverse": true
	},
	{
		"title": "Cairo, Shellie, Bethany, Demetrius",
		"date": "06.21.20",
		"time": "00:00",
		"msg": 3,
		"description": "accumsan sed, facilisis vitae, orci. Phasellus dapibus quam quis diam.",
		"reverse": false
	},
	{
		"title": "Austin, Leandra, Magee, Quintessa",
		"date": "01.24.20",
		"time": "00:00",
		"msg": 7,
		"description": "Fusce mollis. Duis sit amet diam eu dolor egestas rhoncus.",
		"reverse": false
	},
	{
		"title": "Rebekah, Ursula, Imelda, Dexter",
		"date": "07.20.20",
		"time": "00:00",
		"msg": 3,
		"description": "tempus eu, ligula. Aenean euismod mauris eu elit. Nulla facilisi.",
		"reverse": false
	},
	{
		"title": "Jacob, Wyoming, Alice, Isadora",
		"date": "01.12.21",
		"time": "00:00",
		"msg": 8,
		"description": "netus et malesuada fames ac turpis egestas. Aliquam fringilla cursus",
		"reverse": true
	},
	{
		"title": "Cora, Wang, Tatyana, Hashim",
		"date": "01.21.20",
		"time": "00:00",
		"msg": 4,
		"description": "tristique aliquet. Phasellus fermentum convallis ligula. Donec luctus aliquet odio.",
		"reverse": true
	},
	{
		"title": "Alana, Katelyn, Ryan, Violet",
		"date": "07.31.21",
		"time": "00:00",
		"msg": 10,
		"description": "et libero. Proin mi. Aliquam gravida mauris ut mi. Duis",
		"reverse": true
	},
	{
		"title": "Jin, Dana, Ivy, Amir",
		"date": "07.03.21",
		"time": "00:00",
		"msg": 5,
		"description": "diam dictum sapien. Aenean massa. Integer vitae nibh. Donec est",
		"reverse": false
	},
	{
		"title": "Daniel, Murphy, Lael, Kadeem",
		"date": "10.29.21",
		"time": "00:00",
		"msg": 8,
		"description": "risus. Morbi metus. Vivamus euismod urna. Nullam lobortis quam a",
		"reverse": true
	},
	{
		"title": "Warren, Flavia, Darius, Linda",
		"date": "09.13.21",
		"time": "00:00",
		"msg": 10,
		"description": "felis ullamcorper viverra. Maecenas iaculis aliquet diam. Sed diam lorem,",
		"reverse": false
	},
	{
		"title": "Chase, Willa, Summer, Heidi",
		"date": "07.31.20",
		"time": "00:00",
		"msg": 2,
		"description": "ipsum. Donec sollicitudin adipiscing ligula. Aenean gravida nunc sed pede.",
		"reverse": false
	},
	{
		"title": "Uta, Kiara, Isaiah, Jessamine",
		"date": "06.12.20",
		"time": "00:00",
		"msg": 7,
		"description": "vulputate dui, nec tempus mauris erat eget ipsum. Suspendisse sagittis.",
		"reverse": true
	},
	{
		"title": "Cheyenne, Noelle, Maile, Isabelle",
		"date": "10.11.20",
		"time": "00:00",
		"msg": 2,
		"description": "Aliquam adipiscing lobortis risus. In mi pede, nonummy ut, molestie",
		"reverse": true
	},
	{
		"title": "Christen, Stephen, Ferdinand, Ann",
		"date": "05.30.20",
		"time": "00:00",
		"msg": 6,
		"description": "et malesuada fames ac turpis egestas. Aliquam fringilla cursus purus.",
		"reverse": false
	},
	{
		"title": "Sharon, Bell, Samantha, Fatima",
		"date": "07.02.21",
		"time": "00:00",
		"msg": 8,
		"description": "Curae; Donec tincidunt. Donec vitae erat vel pede blandit congue.",
		"reverse": false
	},
	{
		"title": "Henry, Briar, Ila, Ulric",
		"date": "11.16.21",
		"time": "00:00",
		"msg": 8,
		"description": "a tortor. Nunc commodo auctor velit. Aliquam nisl. Nulla eu",
		"reverse": true
	},
	{
		"title": "Wendy, Daryl, Heidi, Nathan",
		"date": "03.04.21",
		"time": "00:00",
		"msg": 5,
		"description": "ullamcorper magna. Sed eu eros. Nam consequat dolor vitae dolor.",
		"reverse": true
	},
	{
		"title": "Jordan, Yael, Uma, Florence",
		"date": "11.15.20",
		"time": "00:00",
		"msg": 8,
		"description": "non quam. Pellentesque habitant morbi tristique senectus et netus et",
		"reverse": false
	},
	{
		"title": "Leandra, Slade, Amery, Farrah",
		"date": "07.05.20",
		"time": "00:00",
		"msg": 4,
		"description": "eros nec tellus. Nunc lectus pede, ultrices a, auctor non,",
		"reverse": true
	},
	{
		"title": "Drake, Barclay, Leandra, Quemby",
		"date": "11.16.21",
		"time": "00:00",
		"msg": 3,
		"description": "id enim. Curabitur massa. Vestibulum accumsan neque et nunc. Quisque",
		"reverse": true
	},
	{
		"title": "Nora, Fritz, Noah, Merritt",
		"date": "05.18.20",
		"time": "00:00",
		"msg": 8,
		"description": "eu dui. Cum sociis natoque penatibus et magnis dis parturient",
		"reverse": true
	},
	{
		"title": "Xavier, Ila, Reuben, Stewart",
		"date": "12.29.20",
		"time": "00:00",
		"msg": 5,
		"description": "orci lobortis augue scelerisque mollis. Phasellus libero mauris, aliquam eu,",
		"reverse": false
	},
	{
		"title": "Oscar, Alexa, Drake, Aimee",
		"date": "03.06.21",
		"time": "00:00",
		"msg": 5,
		"description": "semper. Nam tempor diam dictum sapien. Aenean massa. Integer vitae",
		"reverse": false
	},
	{
		"title": "Jermaine, Melissa, Amos, Melissa",
		"date": "12.04.20",
		"time": "00:00",
		"msg": 10,
		"description": "lacinia at, iaculis quis, pede. Praesent eu dui. Cum sociis",
		"reverse": true
	},
	{
		"title": "Heidi, Lyle, Ramona, Medge",
		"date": "11.20.20",
		"time": "00:00",
		"msg": 8,
		"description": "purus mauris a nunc. In at pede. Cras vulputate velit",
		"reverse": true
	},
	{
		"title": "Lester, Geoffrey, Tobias, Blake",
		"date": "09.20.21",
		"time": "00:00",
		"msg": 2,
		"description": "ullamcorper, velit in aliquet lobortis, nisi nibh lacinia orci, consectetuer",
		"reverse": false
	},
	{
		"title": "Jerry, Kevin, Christian, Stephanie",
		"date": "12.02.19",
		"time": "00:00",
		"msg": 3,
		"description": "ut cursus luctus, ipsum leo elementum sem, vitae aliquam eros",
		"reverse": false
	},
	{
		"title": "Vance, Gabriel, Yuli, Levi",
		"date": "01.14.20",
		"time": "00:00",
		"msg": 4,
		"description": "non, luctus sit amet, faucibus ut, nulla. Cras eu tellus",
		"reverse": false
	},
	{
		"title": "Jameson, Lilah, Mary, Todd",
		"date": "01.17.20",
		"time": "00:00",
		"msg": 7,
		"description": "mattis. Integer eu lacus. Quisque imperdiet, erat nonummy ultricies ornare,",
		"reverse": true
	},
	{
		"title": "Barclay, Pamela, Glenna, Kato",
		"date": "01.18.20",
		"time": "00:00",
		"msg": 6,
		"description": "aliquam iaculis, lacus pede sagittis augue, eu tempor erat neque",
		"reverse": false
	},
	{
		"title": "Mollie, Hanae, Kelly, Kim",
		"date": "09.29.20",
		"time": "00:00",
		"msg": 1,
		"description": "mollis. Duis sit amet diam eu dolor egestas rhoncus. Proin",
		"reverse": false
	},
	{
		"title": "Deacon, Kevin, Fulton, Lysandra",
		"date": "06.23.20",
		"time": "00:00",
		"msg": 10,
		"description": "nulla at sem molestie sodales. Mauris blandit enim consequat purus.",
		"reverse": false
	},
	{
		"title": "Wang, Ezekiel, Hanna, Eaton",
		"date": "09.22.20",
		"time": "00:00",
		"msg": 5,
		"description": "ante lectus convallis est, vitae sodales nisi magna sed dui.",
		"reverse": false
	},
	{
		"title": "Kevyn, Phelan, Odette, Susan",
		"date": "10.26.21",
		"time": "00:00",
		"msg": 6,
		"description": "mollis non, cursus non, egestas a, dui. Cras pellentesque. Sed",
		"reverse": true
	},
	{
		"title": "Maite, Anika, Constance, Vanna",
		"date": "02.17.21",
		"time": "00:00",
		"msg": 1,
		"description": "non, vestibulum nec, euismod in, dolor. Fusce feugiat. Lorem ipsum",
		"reverse": true
	}
]

export default cards;