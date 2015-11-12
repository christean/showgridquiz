<?php ob_start(); 
require_once ('dompdf/dompdf_config.inc.php');
require_once ('encrypt.php');

$company = "eDataWorld";
$date = date("m-d-Y");
$consultant = "Lou Doe";

$html = '
<html>
	<head>
	</head>
	<body>
		<img src="img/logo.png" width="150" height="70" />
		<p>Date: '.date("m-d-Y").'<br />
		Company: '.$company .'<br />
		Consultant: '.$consultant.'</p>
		<h3>Information</h3>
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis</p>
		<p>iaculis elit, at commodo tortor finibus elementum. Cras hendrerit purus </p>
		<p>ut nisl blandit hendrerit. Aliquam ultrices risus leo, at tincidunt lorem </p>
		<p>cursus sed. Nullam eget hendrerit mi, at ultricies erat. Ut eleifend lectus</p>
	</body>
</html>';

$pdf = new DOMPDF();
$pdf->set_paper("A4", "portrait");
$pdf->load_html(utf8_encode($html));
$pdf->render();
$filename = "score_".$consultant.'.pdf';
$pdf->stream($filename);
$dompdf = $pdf->output();
//file_put_contents("pdf/" . $filename, $dompdf);
file_put_contents($filename, $dompdf);

//password for the pdf file
$password = 'edataworld';

//name of the original file (unprotected)
$origFile = $filename;

//name of the destination file (password protected and printing rights removed)
$destFile = $filename;

//encrypt the book and create the protected file
pdfEncrypt($origFile, $password, $destFile );
?>