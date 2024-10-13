#include<iostream>
#include<cmath>
#include<climits>
using namespace std;
int solve(int n){
    if(n==1){
        return 1;
    }
    if(n==0){
        return 0;
    }
    if(n<0){
        return -1;
    }
    
    int j=sqrt(n);
    
    int ans=INT_MAX;
    while(j>0){
        int t=solve(n-j*j);
        if(t!=-1){

            ans=min(ans,t+1);
            cout<<ans;
        }
        j=sqrt(j);
        if(j=2)break;
    }
    return ans;

}
int MinSquares(int n) {
    // Code here
    return solve(n);
    
}
int main()
{
    cout<<"ans "<<MinSquares(100);

    
} 


