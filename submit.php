<?php 

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

if ( empty($_POST) ){
    $post = json_decode(file_get_contents("php://input") , true)['data'];
}
else {
    $post = $_POST;
}

/** Lis of parameters : 
*types_moteur
*diametre_poulie_moteur
*nb_gorge
*unite_mesure
*diametre_arbre
*m_unit
*nb_gorge_menee
*types_menee
*diametre_poulie_menee
*entraxe
*type_courroie
*longueur_courroie
*rendement_actuel_hvac
*rendement_souhaite_hvac
*/

foreach ($post as $param=>$value){
	echo $param.',';
}

/*PDO Database Insertion */
$db_config = array( 
                    'name'=>'industrial_product',
                    'user'=>'root' ,
                    'password'=>'' ,
                    'hostname'=>'localhost' 

                );
$table_name = 'reponses';



$db = new PDO( 'mysql:host='.$db_config['hostname'].',dbname='.$db_config['name'].',charset=UTF-8', $db_config['user'] , $db_config['password'] );
$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
$db->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);


$request = $db->prepare(" INSERT INTO $table_name (`ID`,`types_moteur`,`diametre_poulie_moteur`,`nb_gorge`,`unite_mesure`,`diametre_arbre`,`m_unit`,`nb_gorge_menee`,`types_menee`,`diametre_poulie_menee`,`diametre_arbre_menee`,`entraxe`,`type_courroie`,`longueur_courroie`,`rendement_actuel_hvac`,`rendement_souhaite_hvac`) VALUES (NULL,:types_moteur,:diametre_poulie_moteur,:nb_gorge,:unite_mesure,:diametre_arbre,:m_unit,:nb_gorge_menee,:types_menee,:diametre_poulie_menee,:diametre_arbre_menee,:entraxe,:type_courroie,:longueur_courroie,:rendement_actuel_hvac,:rendement_souhaite_hvac)");

$data = array(

"types_moteur"=>             $post['types_moteur']
,"diametre_poulie_moteur"=>  $post['diametre_poulie_moteur']
,"nb_gorge"=>                $post['nb_gorge']
,"unite_mesure"=>            $post['unite_mesure']
,"diametre_arbre"=>          $post['diametre_arbre']
,"m_unit"=>                  $post['m_unit']
,"nb_gorge_menee"=>          $post['nb_gorge_menee']
,"types_menee"=>             $post['types_menee']
,"diametre_poulie_menee"=>   $post['diametre_poulie_menee']
,"diametre_arbre_menee"=>    $post['diametre_arbre_menee']
,"entraxe"=>                 $post['entraxe']
,"type_courroie"=>           $post['type_courroie']
,"longueur_courroie"=>       $post['longueur_courroie']
,"rendement_actuel_hvac"=>   $post['rendement_actuel_hvac']
,"rendement_souhaite_hvac"=> $post['rendement_souhaite_hvac']

);


$request->execute($data);