#pragma strict

function Start () {

}

function Update () {

}

function pausegame()
{

			if(Time.timeScale == 1)
				Time.timeScale = 0; 
			else
				Time.timeScale = 1; 
}