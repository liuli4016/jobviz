








// Lazily construct the package hierarchy from class names.
function packageHierarchy(packages) 
{
	   //console.log(packages);
	
     var map = {};

     function find(id, data) 
     {
     	
     	  //console.log(id);
     	
        var node = map[id];
        if (!node) 
        {
        	 map[id] = data || {id: id, children: []};
           node = map[id];
           if (id.length) 
	         {
              node.parent = find(id.substring(0, id.indexOf("@")));
              node.parent.children.push(node);
              node.key = id.substring(id.indexOf("|")+1, id.length);
           }
        }
                    
        return node;
     }

     packages.forEach(function(d) 
     { /*    	  
     	  var thisid = d.id;    	  
     	  var nodename = thisid.substring(thisid.indexOf("@")+1, thisid.length);     	  
     	  if (nodename.length>1)
     	 */
           find(d.id, d);
     });

     return map[""];
}


// Return a list of imports for the given array of nodes.
function packageImports(nodes) 
{
     var map = {},
     imports = [];
  
     nodes.forEach(function(d)   // Compute a map from id to node.
     {  
        map[d.id] = d;
     });

     // For each import, construct a link from the source to target node.
     nodes.forEach(function(d) 
     {
                   if (d.imports) 
	                 d.imports.forEach(function(i) {
                                     imports.push({source: map[d.id], target: map[i]});
                   });
     });

     return imports;
}