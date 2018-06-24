sbd=parseInt(localStorage.getItem('now'));
var ssbd=[];
var sten=[];
var slop=[];
var sdiem=[];
var ten=[];
var lop=[];
var diem=[];
var hang=[];
var hangnow=1;
var ohang=document.getElementsByClassName('xephang');
var oten=document.getElementsByClassName('ten');
var olop=document.getElementsByClassName('lop');
var odiem=document.getElementsByClassName('diem');
var osbd=document.getElementsByClassName('sbd');

function hsbd(x)
{if(x<10)
{return '00'+x;}
else if(x<99)
{return '0'+x}
else{return x}}

for (i=1;i<=sbd;i++)
{
	sten[i]='ten'+i;
	ten[i]=localStorage.getItem(sten[i]);
	slop[i]='lop'+i;
	lop[i]=localStorage.getItem(slop[i]);
	sdiem[i]='diem'+i;
	diem[i]=localStorage.getItem(sdiem[i]);
	ssbd[i]=i;
}
var sbdnow=sbd;
for(i=1;i<=diem.length;i++)
	{
		for(j=1;j<=diem.length;j++)
		{
			if(parseInt(diem[i])>parseInt(diem[j]))
			{
				tam=diem[i];
				diem[i]=diem[j];
				diem[j]=tam;
				
				tam=ten[i];
				ten[i]=ten[j];
				ten[j]=tam;
				
				tam=lop[i];
				lop[i]=lop[j];
				lop[j]=tam;
				
				tam=ssbd[i];
				ssbd[i]=ssbd[j];
				ssbd[j]=tam;
			}
		}
	}
hang[1]=1;
for(i=2;i<=sbd;i++)
{
	if(diem[i]==diem[i-1])
	{
		hang[i]=hang[i-1]
	}else
	{
		hang[i]=hang[i-1]+1;
	}
}
if(sbd<=5)
{
	for(j=1;j<=sbd;j++)
	{
		ohang[j].innerHTML=hang[j];
		odiem[j].innerHTML=diem[j];
		oten[j].innerHTML=ten[j];
		olop[j].innerHTML=lop[j];
		osbd[j].innerHTML=hsbd(ssbd[j]);
	}
}
else
{
	for(j=1;j<=5;j++)
	{
		ohang[j].innerHTML=hang[j];
		odiem[j].innerHTML=diem[j];
		oten[j].innerHTML=ten[j];
		olop[j].innerHTML=lop[j];
		osbd[j].innerHTML=hsbd(ssbd[j]);
	}
}

for(i=1;i<=sbd;i++)
{
	if(ssbd[i]==sbdnow)
	{
	document.getElementById('oten').innerHTML=ten[i];
	document.getElementById('olop').innerHTML=lop[i];
	document.getElementById('odiem').innerHTML=diem[i];
	document.getElementById('osbd').innerHTML=hsbd(ssbd[i]);
	document.getElementById('oxephang').innerHTML=hang[i];
	}
}
function xephang()
{
	document.getElementById('diem').style.display='none';
	document.getElementById('thexh').style.display='block';

}
