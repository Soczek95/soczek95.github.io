#include <iostream>
#include <fstream>

using namespace std;

char nazwa[50];
double W = 0;
double H = 0; 
double BMI = 0;
int I = 1;
char ODP;
void dodawanie_danych();


int main(){

    cout << "Podaj nazwe pliku do oczytu: " << endl;
    cin >> nazwa;
    ifstream odczyt(nazwa);
    ofstream zapis("BMI.txt");
    ofstream index("index.html");
    
    
    cout << "Czy chcesz dodad dane do pliku? Y/N"<<endl;
    cin >> ODP;
    if (ODP == 'Y'){
    dodawanie_danych();
    }

    if (!odczyt)
    {
        cout << "Pliku nie mozna odczytac"<< endl;
        getchar();
        return 1;
    }
    index <<  "<link rel='stylesheet' href='./main.css'>"<< endl << "<body><table><p>BMI Kalkulator</p>"<< endl << "<tr> <th>ID</th><th>Waga</th><th>Wzrost</th><th>BMI</th></tr>";
    while (!odczyt.eof())
    {
        odczyt >> W >> H;
        BMI = W / (H*H);
        zapis << BMI << endl;
        cout << "Odczytane dane: "<<endl<< "Osoba "<< I << endl<< "Waga: "<<W <<endl<<  "Wzrost: "<< H <<endl<<"BMI: "<<BMI<<endl;
        index << "<tr><td>"<< I <<"</td><td>" << W <<"</td><td>" << H << "</td><td>" << BMI << "</td></tr>";
        I++;
  
    }
    index << "</table></body>";
    odczyt.close();
    zapis.close();
}

void dodawanie_danych(){
    int x = 0;
    cout << "Ilu osob dane chcialbys dodac";
    cin >> x;
    ofstream dane(nazwa ,ios_base::app);
    for (int i = 0; i < x; i++)
    {
        cout<<"Podaj wage w KG:"<<endl;
        cin>>W;
        cout<<"Podaj wzrost w M:"<<endl;
        cin>>H; 
        dane <<endl;
        dane <<  W << endl;
        dane <<  H ;
    }
}
