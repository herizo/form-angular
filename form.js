var app = angular.module('formulaire' , []);
app.controller('formCtrl', function($scope , $http){
    $scope.step = 1; //page 1 à 5
    $scope.error = false;

    $scope.params = {};
    $scope.data = {};

    $scope.data.types =[ 
        { 'name':'SPA', 'value':'spa'},
        { 'name':'SPB', 'value' : 'spb'},
        { 'name':'SPZ', 'value':'spz'}
    ];

    $scope.data.spa_diametres = [63, 67, 71, 75, 80, 85, 90, 95,100,106,112,118,125,132,140,150,160,170,180,190,200,212,224,236,250,280,300,315,355,400,450,500,560,630];

    $scope.data.spb_diametres = [100,106,112,118,125,132,140,150,160,170,180,190,200,212,224,236,250,265,280,300,315,335,355,375,400,425,450,500,560,630,710,800,900,1000];

    $scope.data.spz_diametres = [50, 56, 60, 63, 67, 71, 75, 80, 85, 90, 95,100,106,112,118,125,132,140,150,160,170,180,190,200,224,250,280,315,355,400,450,500,630];

    $scope.data.nombre_gorges =[1,2,3,4,5,6,7,8,9,10];

    $scope.data.taper_metriques = [10,100,105,11,110,115,12,120,125,14,15,16,17,18,19,20,22,24,25,28,30,32,35,38,40,42,45,48,50,55,60,65,70,75,80,85,90,95];

    $scope.data.taper_pouces =["1","1 1/2","1 1/4","1 1/8","1 3/4","1 3/8","1 5/8","1 7/8","1/2","2","2 1/2","2 1/4","2 1/8","2 3/4","2 3/8","2 5/8","2 7/8","3","3 1/2","3 1/4","3 1/8","3 3/4","3 3/8","3/4","3/8","4","4 1/2","4 1/4","4 3/4","5","5/8","7/8"];

    $scope.data.entraxe = ["100 – 500" ,"500 – 750","750 – 1.000","1.000 – 1.250" ,"1.250 – 1.500" ,"1.500 – 1.750" ,"1.750 – 2.000" ,"plus de 2.000 "];

    $scope.data.spb_longueurs={
    'B':[
        'B 23 / (17 x 570 Li)','B 24 / (17 x 615 Li)','B 25 / (17 x 630 Li)','B 26 / (17 x 650 Li)','B 26 ½ / (17 x 670 Li)','B 27 / (17 x 686 Li)','B 28 / (17 x 710 Li)','B 29 / (17 x 725 Li)','B 30 / (17 x 750 Li)','B 31 / (17 x 775 Li)','B 32 / (17 x 800 Li)','B 32 ½ / (17 x 825 Li)','B 33 / (17 x 836 Li)','B 34 / (17 x 850 Li)','B 34 ½ / (17 x 875 Li)','B 35 / (17 x 889 Li)','B 36 / (17 x 900 Li)','B 37 / (17 x 925 Li)','B 37 ½ / (17 x 950 Li)','B 38 / (17 x 965 Li)','B 38 ½ / (17 x 975 Li)','B 39 / (17 x 1000 Li)','B 40 / (17 x 1016 Li)','B 40 ½ / (17 x 1030 Li)','B 41 / (17 x 1040 Li)','B 41 ½ / (17 x 1050 Li)','B 42 / (17 x 1060 Li)','B 42 ½ / (17 x 1075 Li)','B 43 / (17 x 1090 Li)','B 43 ¼ / (17 x 1100 Li)','B 44 / (17 x 1120 Li)','B 45 / (17 x 1150 Li)','B 45 ½ / (17 x 1163 Li)','B 46 / (17 x 1175 Li)','B 46 ½ / (17 x 1180 Li)','B 47 / (17 x 1200 Li)','B 48 / (17 x 1215 Li)','B 48 ½ / (17 x 1225 Li)','B 49 / (17 x 1250 Li)','B 50 / (17 x 1275 Li)','B 51 / (17 x 1300 Li)','B 52 / (17 x 1320 Li)','B 52 ½ / (17 x 1335 Li)','B 53 / (17 x 1350 Li)','B 53 ½ / (17 x 1360 Li)','B 54 / (17 x 1372 Li)','B 55 / (17 x 1400 Li)','B 56 / (17 x 1422 Li)','B 57 / (17 x 1450 Li)','B 58 / (17 x 1473 Li)','B 59 / (17 x 1500 Li)','B 60 / (17 x 1525 Li)','B 61 / (17 x 1550 Li)','B 62 / (17 x 1575 Li)','B 63 / (17 x 1600 Li)','B 64 / (17 x 1625 Li)','B 65 / (17 x 1650 Li)','B 66 / (17 x 1676 Li)','B 67 / (17 x 1700 Li)','B 68 / (17 x 1725 Li)','B 69 / (17 x 1750 Li)','B 69 ½ / (17 x 1761 Li)','B 70 / (17 x 1775 Li)','B 71 / (17 x 1800 Li)','B 72 / (17 x 1829 Li)','B 73 / (17 x 1850 Li)','B 74 / (17 x 1880 Li)','B 75 / (17 x 1900 Li)','B 76 / (17 x 1930 Li)','B 77 / (17 x 1950 Li)','B 78 / (17 x 1981 Li)','B 79 / (17 x 2000 Li)','B 80 / (17 x 2032 Li)','B 81 / (17 x 2060 Li)','B 82 / (17 x 2083 Li)','B 83 / (17 x 2100 Li)','B 83 ½ / (17 x 2120 Li)','B 84 / (17 x 2134 Li)','B 85 / (17 x 2160 Li)','B 86 / (17 x 2200 Li)','B 87 / (17 x 2210 Li)','B 88 / (17 x 2240 Li)','B 89 / (17 x 2261 Li)','B 90 / (17 x 2286 Li)','B 91 / (17 x 2300 Li)','B 92 / (17 x 2337 Li)','B 93 / (17 x 2360 Li)','B 94 / (17 x 2388 Li)','B 94 ½ / (17 x 2400 Li)','B 95 / (17 x 2413 Li)','B 96 / (17 x 2438 Li)','B 96 ½ / (17 x 2450 Li)','B 97 / (17 x 2465 Li)','B 98 / (17 x 2500 Li)','B 99 / (17 x 2515 Li)','B 100 / (17 x 2540 Li)','B 101 / (17 x 2565 Li)','B 102 / (17 x 2600 Li)','B 103 / (17 x 2616 Li)','B 104 / (17 x 2650 Li)','B 105 / (17 x 2667 Li)','B 106 / (17 x 2700 Li)','B 107 / (17 x 2718 Li)','B 108 / (17 x 2750 Li)','B 110 / (17 x 2800 Li)','B 112 / (17 x 2845 Li)','B 114 / (17 x 2900 Li)','B 115 / (17 x 2921 Li)','B 116 / (17 x 2950 Li)','B 118 / (17 x 3000 Li)','B 120 / (17 x 3048 Li)','B 122 / (17 x 3099 Li)','B 124 / (17 x 3150 Li)','B 125 / (17 x 3175 Li)','B 126 / (17 x 3200 Li)','B 128 / (17 x 3250 Li)','B 130 / (17 x 3302 Li)','B 132 / (17 x 3350 Li)','B 133 / (17 x 3378 Li)','B 134 / (17 x 3404 Li)','B 136 / (17 x 3450 Li)','B 138 / (17 x 3505 Li)','B 140 / (17 x 3550 Li)','B 142 / (17 x 3600 Li)','B 144 / (17 x 3658 Li)','B 146 / (17 x 3700 Li)','B 148 / (17 x 3750 Li)','B 150 / (17 x 3810 Li)','B 151 / (17 x 3850 Li)','B 152 / (17 x 3861 Li)','B 154 / (17 x 3912 Li)','B 155 / (17 x 3950 Li)','B 156 / (17 x 3962 Li)','B 158 / (17 x 4000 Li)','B 160 / (17 x 4064 Li)','B 162 / (17 x 4115 Li)','B 165 / (17 x 4200 Li)','B 167 / (17 x 4250 Li)','B 173 / (17 x 4394 Li)','B 175 / (17 x 4450 Li)','B 177 / (17 x 4500 Li)','B 180 / (17 x 4572 Li)','B 187 / (17 x 4750 Li)','B 190 / (17 x 4826 Li)','B 195 / (17 x 4953 Li)','B 197 / (17 x 5000 Li)','B 208 / (17 x 5300 Li)','B 210 / (17 x 5334 Li)','B 220 / (17 x 5600 Li)','B 225 / (17 x 5715 Li)','B 236 / (17 x 6000 Li)','B 240 / (17 x 6096 Li)','B 248 / (17 x 6300 Li)','B 255 / (17 x 6477 Li)','B 264 / (17 x 6700 Li)','B 270 / (17 x 6858 Li)','B 276 / (17 x 7000 Li)','B 280 / (17 x 7100 Li)','B 300 / (17 x 7620 Li)'
    ],

    'XPB': ['XPB 1250','XPB 1320','XPB 1400','XPB 1450','XPB 1500','XPB 1600','XPB 1650','XPB 1700','XPB 1750','XPB 1800','XPB 1850','XPB 1900','XPB 2000','XPB 2020','XPB 2040','XPB 2120','XPB 2150','XPB 2240','XPB 2280','XPB 2360','XPB 2400','XPB 2500','XPB 2650','XPB 2680','XPB 2800','XPB 2840','XPB 3000','XPB 3150','XPB 3350','XPB 3550']
    ,

    'SPB': [

        'SPB 1250','SPB 1320','SPB 1400','SPB 1450','SPB 1500','SPB 1550','SPB 1600','SPB 1650','SPB 1680','SPB 1700','SPB 1750','SPB 1800','SPB 1850','SPB 1900','SPB 1950','SPB 2000','SPB 2020','SPB 2060','SPB 2120','SPB 2150','SPB 2180','SPB 2240','SPB 2280','SPB 2300','SPB 2360','SPB 2391','SPB 2400','SPB 2410','SPB 2430','SPB 2450','SPB 2500','SPB 2530','SPB 2580','SPB 2650','SPB 2680','SPB 2720','SPB 2800','SPB 2840','SPB 2850','SPB 2900','SPB 2950','SPB 3000','SPB 3050','SPB 3070','SPB 3150','SPB 3170','SPB 3200','SPB 3250','SPB 3320','SPB 3350','SPB 3450','SPB 3550','SPB 3650','SPB 3750','SPB 3800','SPB 3870','SPB 4000','SPB 4050','SPB 4060','SPB 4120','SPB 4250','SPB 4300','SPB 4370','SPB 4500','SPB 4560','SPB 4750','SPB 4820','SPB 5000','SPB 5070','SPB 5300','SPB 5600','SPB 6000','SPB 6300','SPB 6700','SPB 7100','SPB 7500','SPB 8000'
    ]
    };

    $scope.data.spz_longueurs = {
        'Z' : ['Z 11 / (10 x 290 Li)','Z 12 ½ / (10 x 315 Li)','Z 14 / (10 x 375 Li)','Z 15 / (10 x 400 Li)','Z 16 / (10 x 425 Li)','Z 17 / (10 x 450 Li)','Z 18 / (10 x 475 Li)','Z 19 / (10 x 480 Li)','Z 19 ¾ / (10 x 500 Li)','Z 20 / (10 x 515 Li)','Z 20 ½ / (10 x 525 Li)','Z 21 / (10 x 530 Li)','Z 21 ¼ / (10 x 540 Li)','Z 22 / (10 x 560 Li)','Z 23 / (10 x 575 Li)','Z 24 / (10 x 600 Li)','Z 25 / (10 x 630 Li)','Z 26 / (10 x 650 Li)','Z 27 / (10 x 670 Li)','Z 27 ½ / (10 x 700 Li)','Z 28 / (10 x 710 Li)','Z 28 ½ / (10 x 725 Li)','Z 29 / (10 x 730 Li)','Z 29 ½ / (10 x 750 Li)','Z 30 / (10 x 765 Li)','Z 31 / (10 x 775 Li)','Z 31 ½ / (10 x 800 Li)','Z 32 / (10 x 820 Li)','Z 33 / (10 x 825 Li)','Z 33 ½ / (10 x 850 Li)','Z 34 / (10 x 865 Li)','Z 35 / (10 x 875 Li)','Z 36 / (10 x 900 Li)','Z 37 / (10 x 925 Li)','Z 38 / (10 x 950 Li)','Z 38 ½ / (10 x 975 Li)','Z 39 / (10 x 1000 Li)','Z 40 / (10 x 1016 Li)','Z 40 ½ / (10 x 1030 Li)','Z 41 / (10 x 1041 Li)','Z 41 ½ / (10 x 1050 Li)','Z 42 / (10 x 1060 Li)','Z 43 / (10 x 1080 Li)','Z 43 ¼ / (10 x 1100 Li)','Z 44 / (10 x 1120 Li)','Z 45 / (10 x 1150 Li)','Z 46 / (10 x 1165 Li)','Z 46 ½ / (10 x 1180 Li)','Z 47 / (10 x 1194 Li)','Z 48 / (10 x 1215 Li)','Z 48 ½ / (10 x 1225 Li)','Z 49 / (10 x 1250 Li)','Z 50 / (10 x 1270 Li)','Z 51 / (10 x 1295 Li)','Z 52 / (10 x 1320 Li)','Z 53 / (10 x 1346 Li)','Z 54 / (10 x 1371 Li)','Z 55 / (10 x 1400 Li)','Z 56 / (10 x 1422 Li)','Z 57 / (10 x 1450 Li)','Z 58 / (10 x 1475 Li)','Z 59 / (10 x 1500 Li)','Z 60 / (10 x 1524 Li)','Z 61 / (10 x 1550 Li)','Z 62 / (10 x 1575 Li)','Z 63 / (10 x 1600 Li)','Z 64 / (10 x 1626 Li)','Z 65 / (10 x 1651 Li)','Z 66 / (10 x 1675 Li)','Z 67 / (10 x 1700 Li)','Z 68 / (10 x 1725 Li)','Z 69 / (10 x 1750 Li)','Z 70 / (10 x 1775 Li)','Z 71 / (10 x 1800 Li)','Z 73 / (10 x 1850 Li)','Z 75 / (10 x 1900 Li)','Z 78 / (10 x 1975 Li)','Z 79 / (10 x 2000 Li)','Z 83 ½ / (10 x 2120 Li)','Z 88 / (10 x 2240 Li)','Z 93 / (10 x 2360 Li)','Z 98 / (10 x 2500 Li)'],

        'XPZ': ['XPZ 587','XPZ 612','XPZ 630','XPZ 637','XPZ 662','XPZ 670','XPZ 687','XPZ 710','XPZ 730','XPZ 737','XPZ 750','XPZ 762','XPZ 772','XPZ 787','XPZ 800','XPZ 812','XPZ 825','XPZ 837','XPZ 850','XPZ 862','XPZ 875','XPZ 887','XPZ 900','XPZ 912','XPZ 925','XPZ 937','XPZ 950','XPZ 962','XPZ 987','XPZ 1000','XPZ 1012','XPZ 1037','XPZ 1060','XPZ 1077','XPZ 1087','XPZ 1112','XPZ 1120','XPZ 1137','XPZ 1162','XPZ 1180','XPZ 1187','XPZ 1202','XPZ 1212','XPZ 1237','XPZ 1250','XPZ 1262','XPZ 1287','XPZ 1312','XPZ 1320','XPZ 1337','XPZ 1362','XPZ 1387','XPZ 1400','XPZ 1412','XPZ 1437','XPZ 1462','XPZ 1487','XPZ 1500','XPZ 1512','XPZ 1537','XPZ 1562','XPZ 1587','XPZ 1600','XPZ 1612','XPZ 1662','XPZ 1700','XPZ 1750','XPZ 1762','XPZ 1800','XPZ 1850','XPZ 1900','XPZ 1950','XPZ 2000','XPZ 2120','XPZ 2150','XPZ 2240','XPZ 2360','XPZ 2500','XPZ 2540','XPZ 2650','XPZ 2690','XPZ 2800','XPZ 2840','XPZ 3000','XPZ 3150','XPZ 3350','XPZ 3550'],
        'SPZ': ['SPZ 487','SPZ 512','SPZ 562','SPZ 587','SPZ 612','SPZ 630','SPZ 637','SPZ 662','SPZ 670','SPZ 687','SPZ 710','SPZ 722','SPZ 737','SPZ 750','SPZ 762','SPZ 772','SPZ 787','SPZ 800','SPZ 812','SPZ 825','SPZ 837','SPZ 850','SPZ 862','SPZ 875','SPZ 887','SPZ 900','SPZ 912','SPZ 925','SPZ 937','SPZ 950','SPZ 962','SPZ 987','SPZ 1000','SPZ 1012','SPZ 1024','SPZ 1037','SPZ 1047','SPZ 1060','SPZ 1077','SPZ 1087','SPZ 1112','SPZ 1120','SPZ 1137','SPZ 1162','SPZ 1180','SPZ 1187','SPZ 1202','SPZ 1212','SPZ 1237','SPZ 1250','SPZ 1262','SPZ 1270','SPZ 1287','SPZ 1312','SPZ 1320','SPZ 1337','SPZ 1347','SPZ 1362','SPZ 1387','SPZ 1400','SPZ 1412','SPZ 1420','SPZ 1437','SPZ 1450','SPZ 1462','SPZ 1487','SPZ 1500','SPZ 1512','SPZ 1520','SPZ 1537','SPZ 1562','SPZ 1587','SPZ 1600','SPZ 1612','SPZ 1637','SPZ 1650','SPZ 1662','SPZ 1687','SPZ 1700','SPZ 1737','SPZ 1750','SPZ 1762','SPZ 1787','SPZ 1800','SPZ 1812','SPZ 1837','SPZ 1850','SPZ 1862','SPZ 1887','SPZ 1900','SPZ 1937','SPZ 1950','SPZ 1987','SPZ 2000','SPZ 2037','SPZ 2062','SPZ 2087','SPZ 2120','SPZ 2137','SPZ 2150','SPZ 2187','SPZ 2240','SPZ 2287','SPZ 2360','SPZ 2500','SPZ 2540','SPZ 2650','SPZ 2690','SPZ 2800','SPZ 2840','SPZ 3000','SPZ 3150','SPZ 3350','SPZ 3550']
    };

    $scope.data.spa_longueurs = {
        'A': ['A 16 / (13 x 407 Li)','A 18 / (13 x 457 Li)','A 19 / (13 x 480 Li)','A 20 / (13 x 508 Li)','A 21 / (13 x 535 Li)','A 22 / (13 x 560 Li)','A 23 / (13 x 575 Li)','A 23 ½ / (13 x 600 Li)','A 24 / (13 x 610 Li)','A 25 / (13 x 630 Li)','A 26 / (13 x 650 Li)','A 26 ½ / (13 x 670 Li)','A 27 / (13 x 686 Li)','A 27 ½ / (13 x 700 Li)','A 28 / (13 x 710 Li)','A 29 / (13 x 730 Li)','A 29 ½ / (13 x 750 Li)','A 30 / (13 x 767 Li)','A 31 / (13 x 775 Li)','A 31 ½ / (13 x 800 Li)','A 32 / (13 x 813 Li)','A 32 ½ / (13 x 825 Li)','A 33 / (13 x 841 Li)','A 34 / (13 x 850 Li)','A 34 ½ / (13 x 875 Li)','A 35 / (13 x 889 Li)','A 35 ½ / (13 x 900 Li)','A 36 / (13 x 914 Li)','A 37 / (13 x 925 Li)','A 37 ½ / (13 x 950 Li)','A 38 / (13 x 965 Li)','A 38 ½ / (13 x 975 Li)','A 39 / (13 x 1000 Li)','A 40 / (13 x 1016 Li)','A 40 ½ / (13 x 1030 Li)','A 41 / (13 x 1041 Li)','A 41 ½ / (13 x 1050 Li)','A 42 / (13 x 1060 Li)','A 42 ½ / (13 x 1075 Li)','A 43 / (13 x 1100 Li)','A 43 ½ / (13 x 1105 Li)','A 44 / (13 x 1120 Li)','A 45 / (13 x 1143 Li)','A 45 ½ / (13 x 1150 Li)','A 46 / (13 x 1168 Li)','A 46 ½ / (13 x 1180 Li)','A 47 / (13 x 1200 Li)','A 47 ½ / (13 x 1215 Li)','A 48 / (13 x 1220 Li)','A 48 ½ / (13 x 1225 Li)','A 49 / (13 x 1250 Li)','A 50 / (13 x 1270 Li)','A 51 / (13 x 1300 Li)','A 52 / (13 x 1320 Li)','A 53 / (13 x 1350 Li)','A 54 / (13 x 1375 Li)','A 55 / (13 x 1400 Li)','A 56 / (13 x 1422 Li)','A 57 / (13 x 1450 Li)','A 58 / (13 x 1475 Li)','A 59 / (13 x 1500 Li)','A 60 / (13 x 1525 Li)','A 61 / (13 x 1550 Li)','A 62 / (13 x 1575 Li)','A 63 / (13 x 1600 Li)','A 64 / (13 x 1625 Li)','A 65 / (13 x 1650 Li)','A 66 / (13 x 1676 Li)','A 67 / (13 x 1700 Li)','A 68 / (13 x 1725 Li)','A 69 / (13 x 1750 Li)','A 70 / (13 x 1775 Li)','A 71 / (13 x 1800 Li)','A 72 / (13 x 1825 Li)','A 73 / (13 x 1854 Li)','A 74 / (13 x 1880 Li)','A 75 / (13 x 1900 Li)','A 76 / (13 x 1930 Li)','A 77 / (13 x 1956 Li)','A 78 / (13 x 1980 Li)','A 79 / (13 x 2000 Li)','A 80 / (13 x 2032 Li)','A 81 / (13 x 2060 Li)','A 82 / (13 x 2083 Li)','A 83 / (13 x 2100 Li)','A 83 ½ / (13 x 2120 Li)','A 84 / (13 x 2134 Li)','A 84 ½ / (13 x 2150 Li)','A 85 / (13 x 2160 Li)','A 86 / (13 x 2185 Li)','A 86 ½ / (13 x 2200 Li)','A 87 / (13 x 2210 Li)','A 88 / (13 x 2240 Li)','A 89 / (13 x 2261 Li)','A 90 / (13 x 2286 Li)','A 91 / (13 x 2311 Li)','A 92 / (13 x 2337 Li)','A 93 / (13 x 2360 Li)','A 94 / (13 x 2388 Li)','A 95 / (13 x 2413 Li)','A 96 / (13 x 2438 Li)','A 97 / (13 x 2464 Li)','A 98 / (13 x 2500 Li)','A 100 / (13 x 2540 Li)','A 102 / (13 x 2591 Li)','A 104 / (13 x 2650 Li)','A 105 / (13 x 2667 Li)','A 107 / (13 x 2725 Li)','A 108 / (13 x 2743 Li)','A 110 / (13 x 2800 Li)','A 112 / (13 x 2845 Li)','A 114 / (13 x 2896 Li)','A 116 / (13 x 2946 Li)','A 118 / (13 x 3000 Li)'],
        'XPA': ['XPA 707','XPA 732','XPA 757','XPA 782','XPA 800','XPA 807','XPA 832','XPA 850','XPA 857','XPA 882','XPA 900','XPA 907','XPA 932','XPA 950','XPA 957','XPA 982','XPA 1000','XPA 1007','XPA 1030','XPA 1060','XPA 1082','XPA 1107','XPA 1120','XPA 1132','XPA 1157','XPA 1180','XPA 1207','XPA 1232','XPA 1250','XPA 1257','XPA 1272','XPA 1282','XPA 1307','XPA 1320','XPA 1332','XPA 1357','XPA 1382','XPA 1400','XPA 1432','XPA 1450','XPA 1457','XPA 1482','XPA 1500','XPA 1507','XPA 1532','XPA 1557','XPA 1582','XPA 1600','XPA 1607','XPA 1632','XPA 1650','XPA 1682','XPA 1700','XPA 1732','XPA 1750','XPA 1757','XPA 1782','XPA 1800','XPA 1832','XPA 1850','XPA 1882','XPA 1900','XPA 1932','XPA 1950','XPA 1982','XPA 2000','XPA 2120','XPA 2240','XPA 2360','XPA 2500','XPA 2650','XPA 2800','XPA 3000','XPA 3150','XPA 3350','XPA 3550'],
        'SPA':['SPA 732','SPA 757','SPA 782','SPA 800','SPA 807','SPA 832','SPA 850','SPA 857','SPA 882','SPA 900','SPA 907','SPA 932','SPA 950','SPA 957','SPA 967','SPA 982','SPA 1000','SPA 1007','SPA 1032','SPA 1060','SPA 1082','SPA 1107','SPA 1120','SPA 1132','SPA 1157','SPA 1180','SPA 1207','SPA 1232','SPA 1250','SPA 1257','SPA 1272','SPA 1282','SPA 1307','SPA 1320','SPA 1332','SPA 1357','SPA 1382','SPA 1400','SPA 1407','SPA 1432','SPA 1457','SPA 1482','SPA 1500','SPA 1507','SPA 1532','SPA 1550','SPA 1557','SPA 1582','SPA 1600','SPA 1607','SPA 1632','SPA 1657','SPA 1682','SPA 1700','SPA 1707','SPA 1732','SPA 1750','SPA 1757','SPA 1782','SPA 1800','SPA 1807','SPA 1832','SPA 1857','SPA 1882','SPA 1900','SPA 1907','SPA 1932','SPA 1950','SPA 1957','SPA 1982','SPA 2000','SPA 2032','SPA 2057','SPA 2082','SPA 2120','SPA 2132','SPA 2182','SPA 2207','SPA 2232','SPA 2240','SPA 2282','SPA 2300','SPA 2307','SPA 2332','SPA 2360','SPA 2382','SPA 2432','SPA 2482','SPA 2500','SPA 2532','SPA 2582','SPA 2607','SPA 2632','SPA 2650','SPA 2682','SPA 2732','SPA 2782','SPA 2800','SPA 2832','SPA 2847','SPA 2882','SPA 2932','SPA 2982','SPA 3000','SPA 3032','SPA 3082','SPA 3150','SPA 3182','SPA 3282','SPA 3350','SPA 3382','SPA 3450','SPA 3550','SPA 3750','SPA 4000','SPA 4250','SPA 4500']
    }


    $scope.data.type_courroie = {
        'spz' : ['SPZ' , 'XPZ' , 'Z'],
        'spa' : ['SPA' , 'XPA' , 'A'],
        'spb' : ['SPB' ,'XPB','B']
    };
    
    $scope.nextStep = function(){
        if($scope.step < 5){

            //step 1 to step2 verification
            if($scope.step == 1){
               if($scope.params.types_moteur && $scope.params.diametre_poulie_moteur && $scope.params.nb_gorge && $scope.params.unite_mesure && $scope.params.diametre_arbre ){
                   $scope.error = false;
               }else {
                   $scope.error = 'Vous devez remplir tous les champs avant de passer a l\'étape suivante!';
               }

            }

            if($scope.step == 2){

                if($scope.params.types_menee && $scope.params.diametre_poulie_menee && $scope.params.nb_gorge_menee && $scope.params.m_unit && $scope.params.diametre_arbre_menee){
                   $scope.error = false;
                }else {
                   $scope.error = 'Vous devez remplir tous les champs avant de passer a l\'étape suivante!';
                }

                if ($scope.params.types_menee != $scope.params.types_moteur){
                    $scope.error = 'Il semble que les données que vous avez encodées contiennent une erreur. Le type de la poulie menée (SPA, SPB, SPZ) doit être identique au type de la poulie moteur. Pouvez-vous vérifier vos données? Si vous pensez avoir fait une erreur sur le type de poulie moteur, veuillez retourner en arrière pour corriger.';
                }
                else {
                    $scope.error  = false;
                }
            }

            if($scope.step == 3){
                if ($scope.params.entraxe){
                   $scope.error = false;
                }else {
                   $scope.error = 'Vous devez remplir tous les champs avant de passer a l\'étape suivante!';
                }
            }
            
            if ($scope.step == 4) {
                if ($scope.params.longueur_courroie && $scope.params.type_courroie){
                    console.log($scope.params.longueur_courroie);
                    $scope.error = false;
                }else {
                   $scope.error = 'Vous devez remplir tous les champs avant de passer a l\'étape suivante!';
                }
            }
            
            if ($scope.step == 5){
                if ($scope.params.rendement_actuel_hvac && $scope.params.rendement_souhaite_hvac){
                    $scope.error = false;
                }else {
                   $scope.error = 'Vous devez remplir tous les champs avant de passer a l\'étape suivante!';
                }

            }

            if($scope.error == false){
               $scope.step++;
            }
            
            //$scope.step++;
        }
    };

    $scope.prevStep = function (){
        if ($scope.step >= 1){
            $scope.step--;
        }
    }

    $scope.submit = function(){
        alert('foo');
    }

});
