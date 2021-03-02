// [EXPORT] //
module.exports = {
	fireSprinklerInspectionReport: (test) => {
		return `
		<link
			rel="stylesheet"
			href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
			integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z"
			crossorigin="anonymous"
		>
		<style>
			@media print { .page { page-break-after: always; } }
		</style>
		
		<div class="container page">
			<!-- Title -->
			<div class="row mb-3">
				<div class="col-12">
					<h4 class="font-weight-bold">Fire Sprinkler Inspection Report</h4>
				</div>
			</div>
		
			<!-- Subject Property -->
			<div class="row mb-3">
				<div class="col-12">
					<h5 class="font-weight-bold">Subject Property</h5>
					<hr>
					<h6>123 main st, teaneck, nj</h6>
				</div>
			</div>
		
			<!-- Client Information -->
			<div class="row mb-3">
				<div class="col-12">
					<h5 class="font-weight-bold">Client Information</h5>
					<hr>
		
					<h6>
						<span class="font-weight-bold">Client Name:</span>
						Client Name Here
					</h6>
				</div>
			</div>
			
			<!-- Inspection Details -->
			<div class="row mb-3">
				<div class="col-12">
					<h5 class="font-weight-bold">Inspection Details</h5>
					<hr>
		
					<h6>
						<span class="font-weight-bold">Date/Time:</span>
						June 14, 2019 12:30 PM
					</h6>
				</div>
			</div>
		
			<!-- Inspection Conducted By -->
			<div class="row mb-3">
				<!-- Title -->
				<div class="col-12">
					<h5 class="font-weight-bold">Inspection Conducted By</h5>
				</div>
		
				<!-- Logo -->
				<div class="col-4">
					<img
						src="https://www.24-7fireprotection.com/img/logo.441b8a86.png"
						class="w-100"
					>
				</div>
		
				<!-- Company Detailss -->
				<div class="col-4">
					<h5>24/7 Fire Protection Inc.</h5>
					<h6>123 main st, teaneck, nj</h6>
		
					<h6>Phone: 123 123 1234</h6>
					<h6>Fax: 123 123 1234</h6>
				</div>
		
				<!-- Inspector -->
				<div class="col-4">
					<h5 class="font-weight-bold">Inspected By:</h5>
					<h5>Elis Rosado</h5>
		
					<h5 class="font-weight-bold">Inspector's Signature:</h5>
					<h5>signature not uploaded</h5>
				</div>
			</div>
		</div>
		
		<div class="container page">
			<!-- Title -->
			<div class="row mb-3">
				<div class="col-12">
					<h4 class="font-weight-bold">Inspection Agreement</h4>
				</div>
			</div>
		
			<!-- Title -->
			<div class="row mb-3">
				<div class="col-12">
					<div class="alert alert-primary">PARTIES OF THIS INSPECTION AGREEMENT</div>
				</div>
			</div>
			PAARRTTIIEESS OOFF TTHHIISS IINNSSPPEECCTTIIOONN AAGGRREEEEMMEENNT
		</div>
		`
	},

	footerDefault: `
		<html>
			<h1 class="text-center">
				<span class="pageNumber"><span> of <span class="totalPages"><span>
			</h1>
		</html>
	`
}