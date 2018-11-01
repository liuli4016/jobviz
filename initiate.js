


function savePosClassGroup(careerfieldObject, career_postype_num)
{
	  for (var t = 0; t < jobgroup_num; t++) 
	  {
	     	careerfieldObject[t] = new Object();              
        careerfieldObject[t].major = [];  
        careerfieldObject[t].major_num = [];                                     
        var majornum = 0;                   	    
       	
       	careerfieldObject[t].positiontype_volunteer = [];  
        careerfieldObject[t].positiontype_internship = []; 
       	careerfieldObject[t].positiontype_ftentrylevel = [];
       	careerfieldObject[t].positiontype_ftexperienced = [];    
       	       	
       	careerfieldObject[t].classlevel_freshman = [];  
        careerfieldObject[t].classlevel_sophomore = []; 
       	careerfieldObject[t].classlevel_junior = [];
       	careerfieldObject[t].classlevel_senior = []; 
       	careerfieldObject[t].classlevel_graduate = []; 
       	careerfieldObject[t].classlevel_alumni = []; 
       	careerfieldObject[t].classlevel_unspecified = [];
       	       	                                    
           
        for (var w = 0; w < groupanditem[t].length; w++) 
	      {	         	
	          var thisimports = groupanditem[t][w].imports;  
	                                                           	              
	          for (var j = 0; j < thisimports.length; j++)  
	          {
	              var thisimporttype = thisimports[j].substring(0, thisimports[j].indexOf("@"));              	  
	           	  var temp = thisimports[j].substring(thisimports[j].indexOf("|")+1, thisimports[j].length);  	  
    	     	  
    	          if (thisimporttype=="maj")
                {	                    	           	              	                   	     
	              	 var contained = 0;
	              	     
	                 for (var i = 0; i < careerfieldObject[t].major.length; i++)
	              	 {
	              	     if (careerfieldObject[t].major[i] == temp)
	              	     {
	              	     	  contained = 1;
	              	     	  careerfieldObject[t].major_num[i]++;
	              	     }
	              	 }
	              	     
	              	 if (contained == 0)
	                 {	              	     	
	           	        careerfieldObject[t].major.push(temp);
	           	        careerfieldObject[t].major_num[majornum] = 1;
	           	        majornum++;
	           	     }              	     	              	     
             	  }	              	  	              	  	              
	              	  
	              else if (thisimporttype=="pos")
                { 
                	 if (temp == "Volunteer/Co-op")
                	 {
                      careerfieldObject[t].positiontype_volunteer.push(groupanditem[t][w]);
                      alljobnodes_volunteer.push(groupanditem[t][w]);
                   }
                            	     	                                  	                  	 
                 	 else if (temp == "Internship")
                   { 	
                    	careerfieldObject[t].positiontype_internship.push(groupanditem[t][w]);
                    	alljobnodes_internship.push(groupanditem[t][w]);                    	    
                   }
                   	                       	                     	         
                   else if (temp == "Entry Level")
                   {
                      careerfieldObject[t].positiontype_ftentrylevel.push(groupanditem[t][w]); 
                      alljobnodes_ftentrylevel.push(groupanditem[t][w]); 
                   } 
                    	  
                   else if (temp == "Experienced")
                   {
                      careerfieldObject[t].positiontype_ftexperienced.push(groupanditem[t][w]);  
                      alljobnodes_ftexperienced.push(groupanditem[t][w]);   
                   }                 	                         	
                } 
                
                else if (thisimporttype=="class")
                {  	                	
                	 if (temp == "Freshman")
                	 {
                      careerfieldObject[t].classlevel_freshman.push(groupanditem[t][w]);
                      alljobnodes_freshman.push(groupanditem[t][w]);
                   }
                            	     	                                  	                  	 
                 	 else if (temp == "Sophomore")
                 	 {
                    	careerfieldObject[t].classlevel_sophomore.push(groupanditem[t][w]); 
                    	alljobnodes_sophomore.push(groupanditem[t][w]);
                   }                   	    
                    	                       	                     	         
                   else if (temp == "Junior")
                   {
                      careerfieldObject[t].classlevel_junior.push(groupanditem[t][w]);
                      alljobnodes_junior.push(groupanditem[t][w]); 
                   }
                    	  
                   else if (temp == "Senior")
                   {
                      careerfieldObject[t].classlevel_senior.push(groupanditem[t][w]); 
                      alljobnodes_senior.push(groupanditem[t][w]);
                   }
                      
                   else if (temp == "Graduate Student")
                   {
                      careerfieldObject[t].classlevel_graduate.push(groupanditem[t][w]); 
                      alljobnodes_graduate.push(groupanditem[t][w]);
                   }
                      
                   else if (temp == "Alumni")
                   {
                      careerfieldObject[t].classlevel_alumni.push(groupanditem[t][w]); 
                      alljobnodes_alumni.push(groupanditem[t][w]);
                   }
                      
                   else
                   {
                      careerfieldObject[t].classlevel_unspecified.push(groupanditem[t][w]);
                      alljobnodes_unspecified.push(groupanditem[t][w]);
                   }                    	                         	
                }                                      	              	              	               	                	  	              	  	              	 	              	  
	          }	                                        	         
	       }

	          	          
	       career_postype_num[t] = 0;
	       career_postype[t] = [];	       	       
	       
	       if (careerfieldObject[t].positiontype_volunteer.length > 0)
	       {
	          career_postype[t].push("volunteer"); 
	          career_postype_num[t]++;
	       }
	       
	          	          
	       if (careerfieldObject[t].positiontype_internship.length > 0)
	       {
	          career_postype[t].push("internship"); 
	          career_postype_num[t]++;
	       }   	          	             
	           	               
	             
         if (careerfieldObject[t].positiontype_ftentrylevel.length > 0)
         {
	          career_postype[t].push("ftentrylevel"); 
	          career_postype_num[t]++;
	       }  
	          
	          
	       if (careerfieldObject[t].positiontype_ftexperienced.length > 0)
	       {
	          career_postype[t].push("ftexperienced");
	          career_postype_num[t]++;
	       } 
	       
	       
	       
	       career_classlevel_num[t] = 0;
	       career_classlevel[t] = [];	       	       
	       
	       if (careerfieldObject[t].classlevel_freshman.length > 0)
	       {
	          career_classlevel[t].push("freshman"); 
	          career_classlevel_num[t]++;
	       }
	       
	          	          
	       if (careerfieldObject[t].classlevel_sophomore.length > 0)
	       {
	          career_classlevel[t].push("sophomore"); 
	          career_classlevel_num[t]++;
	       }   	          	             
	           	               
	             
         if (careerfieldObject[t].classlevel_junior.length > 0)
         {
	          career_classlevel[t].push("junior"); 
	          career_classlevel_num[t]++;
	       }  
	          
	          
	       if (careerfieldObject[t].classlevel_senior.length > 0)
	       {
	          career_classlevel[t].push("senior");
	          career_classlevel_num[t]++;
	       }
	       
	       
	       if (careerfieldObject[t].classlevel_graduate.length > 0)
	       {
	          career_classlevel[t].push("graduate");
	          career_classlevel_num[t]++;
	       }
	       
	       
	       if (careerfieldObject[t].classlevel_alumni.length > 0)
	       {
	          career_classlevel[t].push("alumni");
	          career_classlevel_num[t]++;
	       }
	       
	       
	       if (careerfieldObject[t].classlevel_unspecified.length > 0)
	       {
	          career_classlevel[t].push("unspecified");
	          career_classlevel_num[t]++;
	       }	       	          	                                 	                                             
	  } 
	  
}





function saveSubGroup()
{	     
	     for (var t = 0; t < jobgroup_num; t++) 
	     {
	     	    careerfieldObject2[t] = new Object();              
            careerfieldObject2[t].subgroup = []; 
            careerfieldObject2[t].subgroup_name = [];                                    
            var subnum = -1;              	          	                                     
           
            for (var w = 0; w < groupanditem[t].length; w++)
            {
            	   var thiskey = groupanditem[t][w].key;          	   
            	   var res = thiskey.split("#"); 
            	   var contained_sign = -1;
            	   
            	   for (var i = 0; i < careerfieldObject2[t].subgroup_name.length; i++)
            	   {
            	   	   if (careerfieldObject2[t].subgroup_name[i] == res[4])
            	   	      contained_sign = i;
            	   }

                 if (contained_sign == -1)
                 {
                    subnum++;                       
                    careerfieldObject2[t].subgroup_name.push(res[4]);
                    careerfieldObject2[t].subgroup[subnum] = [];
                    careerfieldObject2[t].subgroup[subnum].push(groupanditem[t][w]);  
                 }
                 
                 else if (contained_sign > -1)
                    careerfieldObject2[t].subgroup[contained_sign].push(groupanditem[t][w]);    
            }          
	     }


}






function saveMidJobNodeArray()
{
	//console.log(groupanditem);
	
	  for (var t = 0; t < jobgroup_num; t++)  
	  { 
	  	  midjobnodearray[t] = [];
        var midindex = Math.floor(groupanditem[t].length/2 + 0.5);
	  	
	  	  if (majorplotmode == 1)
	  	  {
	  	  	  var midjobnode1 = jQuery.extend({}, groupanditem[t][midindex]);
	  	  	  midjobnode1.x = 180*jobgroupnodeangle[t]/Math.PI;
	  	  	  midjobnode1.x = midjobnode1.x - 4.0;
	  	  	  midjobnodearray[t].push(midjobnode1);
	  	  	 
	  	  	  var midjobnode2 = jQuery.extend({}, groupanditem[t][midindex]);
	  	  	  midjobnode2.x = 180*jobgroupnodeangle[t]/Math.PI;
	  	  	 	midjobnode2.x = midjobnode2.x - 3.2;
	  	  	 	midjobnodearray[t].push(midjobnode2);
	  	  	 	  
	  	  	  var midjobnode3 = jQuery.extend({}, groupanditem[t][midindex]);
	  	  	  midjobnode3.x = 180*jobgroupnodeangle[t]/Math.PI;
	  	  	 	midjobnode3.x = midjobnode3.x - 2.4;
	  	  	 	midjobnodearray[t].push(midjobnode3);
	  	  	 	  
	  	  	  var midjobnode4 = jQuery.extend({}, groupanditem[t][midindex]);
	  	  	  midjobnode4.x = 180*jobgroupnodeangle[t]/Math.PI;
	  	  	 	midjobnode4.x = midjobnode4.x - 1.6;
	  	  	 	midjobnodearray[t].push(midjobnode4);
	  	  	 	  
	  	  	  var midjobnode5 = jQuery.extend({}, groupanditem[t][midindex]);
	  	  	  midjobnode5.x = 180*jobgroupnodeangle[t]/Math.PI;
	  	  	 	midjobnode5.x = midjobnode5.x - 0.8;
	  	  	 	midjobnodearray[t].push(midjobnode5);
	  	  	 	  
	  	  	  var midjobnode6 = jQuery.extend({}, groupanditem[t][midindex]);
	  	  	  midjobnode6.x = 180*jobgroupnodeangle[t]/Math.PI;
	  	  	 	midjobnode6.x = midjobnode6.x - 0;
	  	  	 	midjobnodearray[t].push(midjobnode6);
	  	  	 	 
	  	  	  var midjobnode7 = jQuery.extend({}, groupanditem[t][midindex]);
	  	  	  midjobnode7.x = 180*jobgroupnodeangle[t]/Math.PI;
	  	  	  midjobnode7.x = midjobnode7.x + 0.8;
	  	  	  midjobnodearray[t].push(midjobnode7);
	  	  	 	  
	  	  	  var midjobnode8 = jQuery.extend({}, groupanditem[t][midindex]);
	  	  	  midjobnode8.x = 180*jobgroupnodeangle[t]/Math.PI;
	  	  	 	midjobnode8.x = midjobnode8.x + 1.6;
	  	  	 	midjobnodearray[t].push(midjobnode8);
	  	  	 	  
	  	  	  var midjobnode9 = jQuery.extend({}, groupanditem[t][midindex]);
	  	  	  midjobnode9.x = 180*jobgroupnodeangle[t]/Math.PI;
	  	  	  midjobnode9.x = midjobnode9.x + 2.4;
	  	  	  midjobnodearray[t].push(midjobnode9);
	  	  	 	  
	  	  	  var midjobnode10 = jQuery.extend({}, groupanditem[t][midindex]);
	  	  	  midjobnode10.x = 180*jobgroupnodeangle[t]/Math.PI;
	  	  	 	midjobnode10.x = midjobnode10.x + 3.2;
	  	  	 	midjobnodearray[t].push(midjobnode10);
	  	  	 	  
	  	  	  var midjobnode11 = jQuery.extend({}, groupanditem[t][midindex]);
	  	  	  midjobnode11.x = 180*jobgroupnodeangle[t]/Math.PI;
	  	  	 	midjobnode11.x = midjobnode11.x + 4.0;
	  	  	 	midjobnodearray[t].push(midjobnode11);
	  	  }
	  	  
	  	  
	  	  else if (majorplotmode == 2)
        {
        	  var midjobnode1 = jQuery.extend({}, groupanditem[t][midindex]);
        	  midjobnode1.x = 180*jobgroupnodeangle[t]/Math.PI;
            midjobnode1.x = midjobnode1.x - 4.4;
            midjobnodearray[t].push(midjobnode1);
              
            var midjobnode2 = jQuery.extend({}, groupanditem[t][midindex]);
            midjobnode2.x = 180*jobgroupnodeangle[t]/Math.PI;
            midjobnode2.x = midjobnode2.x - 3.6;
            midjobnodearray[t].push(midjobnode2);
              
            var midjobnode3 = jQuery.extend({}, groupanditem[t][midindex]);
            midjobnode3.x = 180*jobgroupnodeangle[t]/Math.PI;
            midjobnode3.x = midjobnode3.x - 2.8;
            midjobnodearray[t].push(midjobnode3);
              
            var midjobnode4 = jQuery.extend({}, groupanditem[t][midindex]);
            midjobnode4.x = 180*jobgroupnodeangle[t]/Math.PI;
            midjobnode4.x = midjobnode4.x - 2.0;
            midjobnodearray[t].push(midjobnode4);
           
            var midjobnode5 = jQuery.extend({}, groupanditem[t][midindex]);
            midjobnode5.x = 180*jobgroupnodeangle[t]/Math.PI;
            midjobnode5.x = midjobnode5.x - 1.2;
            midjobnodearray[t].push(midjobnode5);
              
            var midjobnode6 = jQuery.extend({}, groupanditem[t][midindex]);
            midjobnode6.x = 180*jobgroupnodeangle[t]/Math.PI;
            midjobnode6.x = midjobnode6.x - 0.4;
            midjobnodearray[t].push(midjobnode6);
              
            var midjobnode7 = jQuery.extend({}, groupanditem[t][midindex]);
            midjobnode7.x = 180*jobgroupnodeangle[t]/Math.PI;
            midjobnode7.x = midjobnode7.x + 0.4;
            midjobnodearray[t].push(midjobnode7);
              
            var midjobnode8 = jQuery.extend({}, groupanditem[t][midindex]);
            midjobnode8.x = 180*jobgroupnodeangle[t]/Math.PI;
            midjobnode8.x = midjobnode8.x + 1.2;
            midjobnodearray[t].push(midjobnode8);
              
            var midjobnode9 = jQuery.extend({}, groupanditem[t][midindex]);
            midjobnode9.x = 180*jobgroupnodeangle[t]/Math.PI;
            midjobnode9.x = midjobnode9.x + 2.0;
            midjobnodearray[t].push(midjobnode9);
              
            var midjobnode10 = jQuery.extend({}, groupanditem[t][midindex]);
            midjobnode10.x = 180*jobgroupnodeangle[t]/Math.PI;
            midjobnode10.x = midjobnode10.x + 2.8;
            midjobnodearray[t].push(midjobnode10);
              
            var midjobnode11 = jQuery.extend({}, groupanditem[t][midindex]);
            midjobnode11.x = 180*jobgroupnodeangle[t]/Math.PI;
            midjobnode11.x = midjobnode11.x + 3.6;
            midjobnodearray[t].push(midjobnode11);
              
            var midjobnode12 = jQuery.extend({}, groupanditem[t][midindex]);
            midjobnode12.x = 180*jobgroupnodeangle[t]/Math.PI;
            midjobnode12.x = midjobnode12.x + 4.4;
            midjobnodearray[t].push(midjobnode12);
         }
	  }
}