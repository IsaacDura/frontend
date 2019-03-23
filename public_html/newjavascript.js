/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready( function () {


    // VARIABLES
    // ----------------------------------------------------------

    var amount, result;
	var months=1;
    var calculator = $('.calculator');
    var calculatorMonthlyFee = calculator.find('.calculator__monthlyFee');
    var calculatorTip = calculator.find('.calculator__tip');
    var calculatorResult = calculator.find('.calculator__result');
    var tipAmount = calculator.find('.tip-amount');
	


    // INIT BILL
    // ----------------------------------------------------------

    $(window).on('DOMContentLoaded', function () {
        tipAmount.text( calculatorTip.val()  );
			  amount.text( calculator__monthlyFee.val()  );
			
			
        amount = calculatorMonthlyFee.val() * 1;
		  	months= months + calculatorTip.val() * 1;
        percent = calculatorTip.val() * 1;
        result = amount / months;
			  
        calculatorResult.text( result.toFixed(2) + 'CH' );
    });


    // RANGE FUNCTION
    // ----------------------------------------------------------

    calculatorTip.on('change', function () {

        if ( calculatorMonthlyFee.val() === '' || isNaN( calculatorMonthlyFee.val() ) ) {
            alert('Enter monthlyFee amount, please!')
        } else {
            amount = calculatorMonthlyFee.val() * 1;
					
        }

        tipAmount.text( calculatorTip.val() );
			
			
			months= calculatorTip.val() * 1;
        percent = calculatorTip.val() * 1;
        result = amount / months ;
			
        calculatorResult.text( result + '$' );
    });

});

