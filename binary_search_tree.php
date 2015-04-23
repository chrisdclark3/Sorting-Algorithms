<?php 

$arr = array(10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20);

function binary_search_tree($arr, $target)	{
	$length = count($arr);
	$mid = floor($length/2);
	while ($target != $arr[$mid]) {
		if ($target > $arr[$mid]) {
			$mid = $mid + floor($mid/2);
		} else {
			$mid = floor($mid/2);
		}
	}
	echo $mid;
	return $mid;
}
binary_search_tree($arr, 13);

?>