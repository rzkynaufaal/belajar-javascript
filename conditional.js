let mhs = {
    name : "jamil",
    age : 20,
    major : "TRPL",
    skills : [ 'Sysadmin', '00P', 'Design'],
    poor : true,
}

function cekKelulusan(peserta) {
    let age = peserta.age;
    let poor = peserta.poor;
    let skillCount = peserta.skill.length;
    console.log(peserta);

    if (age <  21 && poor && skillCount >= 2 ) {
        console.log( "peserta ini lulus");
       //peserta lulus 

    } else if (age < 21 && poor && skillCount > 2) {
        console.log( "peserta ini hampir lulus");

        //peserta hampir lulus
        
    } else{
        console.log( "peserta ini tidak lulus");
        //peserta tidak lulus

    }

}
cekKelulusan(mhs);
