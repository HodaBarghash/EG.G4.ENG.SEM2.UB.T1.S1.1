function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5X68mnohhIY":
        Script1();
        break;
  }
}

function Script1()
{
  const url="https://script.google.com/macros/s/AKfycbxMveckpAT58B80Q-MGPstbkK8FAjUvAoNQzKMPk-Px-ec_JWos1Pjf5UoSMhTldWm2-g/exec"

var player=GetPlayer()

fetch(url,{
	method:"POST",
	mode: 'no-cors',
	cache:'no-cache',
	headers: {'Content-Type': 'application/json'},
	redirect:'follow',
	body: JSON.stringify({q1attempts:player.GetVar("q1attempts"),q1answeredcorrect:player.GetVar("q1answeredcorrect")})
	}
	)
}

