using UnityEngine; 
using System.Collections; 

public class pauseGame : MonoBehaviour 
{ 
	void Update () 
	{ 
		if (Input.GetKeyDown (KeyCode.Mouse0)) 
		{ 
			if(Time.timeScale == 1)
				Time.timeScale = 0; 
			else
				Time.timeScale = 1; 
		}
	}
}

