app.controller("lotteryController", function($scope) {
    $scope.pot = 1000000;
    $scope.winnings = 0;
    $scope.winningNumbers = [];
    $scope.matched = 0;
    $scope.random = function(m) {
        return Math.ceil(Math.random() * m);
    };
    $scope.play = function() {
        $scope.winningNumbers.length = 0;
        $scope.matched = 0;
        
        $scope.winningNumber1 = $scope.random(69);
        $scope.winningNumbers.push($scope.winningNumber1);
        
        do {
            $scope.winningNumber2 = $scope.random(69);
        } while ($scope.winningNumbers.includes($scope.winningNumber2));
        $scope.winningNumbers.push($scope.winningNumber2);
        
        do {
            $scope.winningNumber3 = $scope.random(69);
        } while ($scope.winningNumbers.includes($scope.winningNumber3));
        $scope.winningNumbers.push($scope.winningNumber3);
        
        do {
            $scope.winningNumber4 = $scope.random(69);
        } while ($scope.winningNumbers.includes($scope.winningNumber4));
        $scope.winningNumbers.push($scope.winningNumber4);
        
        do {
            $scope.winningNumber5 = $scope.random(69);
        } while ($scope.winningNumbers.includes($scope.winningNumber5));
        $scope.winningNumbers.push($scope.winningNumber5);
        
        $scope.winningNumber6 = $scope.random(26);
        
        if ($scope.winningNumbers.includes($scope.yourNumber1)) { $scope.matched++; }
        if ($scope.winningNumbers.includes($scope.yourNumber2)) { $scope.matched++; }
        if ($scope.winningNumbers.includes($scope.yourNumber3)) { $scope.matched++; }
        if ($scope.winningNumbers.includes($scope.yourNumber4)) { $scope.matched++; }
        if ($scope.winningNumbers.includes($scope.yourNumber5)) { $scope.matched++; }
        if ($scope.winningNumber6 === $scope.yourNumber6) { $scope.matched++; }
        
        if ($scope.matched === 6) {
                $scope.verdict = `You matched all 6! You win!`;
                $scope.winnings += $scope.pot;
                $scope.pot = 0;
            } else {
                $scope.verdict = `You matched ${$scope.matched}. You lose!`;
                $scope.winnings -= 2;
                $scope.pot += 500000;
            }
    };
});