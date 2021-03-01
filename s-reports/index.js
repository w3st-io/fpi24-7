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
		<div class="row mb-3">
			<div class="col-12">
				<h4 class="font-weight-bold">Fire Sprinkler Inspection Report</h4>
			</div>
		</div>
	
		<div class="row mb-3">
			<div class="col-4">
				<h5 class="font-weight-bold">Subject Property</h5>
				<h6>123 main st, teaneck, nj</h6>
			</div>
		</div>
		
		<div class="row mb-3">
			<div class="col-12">
				<h5 class="font-weight-bold">Inspection Conducted By</h5>
			</div>
			<div class="col-4">
				<img src="https://www.24-7fireprotection.com/img/logo.441b8a86.png">
			</div>
			<div class="col-4">
				<h5>24/7 Fire Protection Inc.</h5>
				<h6>123 main st, teaneck, nj</h6>
	
				<h6>Phone: 123 123 1234</h6>
				<h6>Fax: 123 123 1234</h6>
			</div>
		</div>
	</div>
	
	<div class="container page">
		<div class="row">
			<div class="col-12">
				<h6 class="text-center">24/7 Fire Protection Inc Report</h6>
			</div>	
		</div>
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