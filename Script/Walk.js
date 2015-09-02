#pragma strict
var lose : GameObject;

function Start () {
	lose.gameObject.SetActive(false);
}

function Update () {

if(Input.GetAxis("Vertical")||Input.GetAxis("Horizontal")){ 
var v :float =Input.GetAxis("Vertical"); 

var h :float =Input.GetAxis("Horizontal"); 

transform.Translate(Vector3(h,0,0)*Time.deltaTime*100,Space.Self); 
	}
}
/*function OnCollisionEnter2D(coll: Collision2D) {
	if(coll.gameObject.tag == "botton" ){
		Destroy(gameObject,2);
		lose.gameObject.SetActive(true);
	}
	
}*/

