<?php  
 $connect = mysqli_connect("localhost", "root", "", "microgriddb2");  
 $tempUsagesOutput1 = 0;
 $sql =  "SELECT * FROM `customerlog` WHERE `address` = '0x0ee4437b716fF015c5c261d0F5513b190DEF1b15'";
 
 $result = mysqli_query($connect, $sql);  
 
 if(mysqli_num_rows($result) > 0)  
 {  
      while($row = 

mysqli_fetch_array($result))  
      {  
	   $tempUsagesOutput1 += (int)$row["tempUsages"];
          
 }
 } 
 echo $tempUsagesOutput1;
 ?>