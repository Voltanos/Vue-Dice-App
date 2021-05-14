export default {
    Create: function () {
        return new DiceType();
    }
}

function DiceType() {
    /////////////////////////////////////////////////
    //Privilege Variables

    this.D2 = {
        ID: 1,
        Rolls: 1,
        Sides: 2,
        Modifier: 0,
        Results: 0,
        Title: "d2"
    };

    this.D4 = {
        ID: 2,
        Rolls: 1,
        Sides: 4,
        Modifier: 0,
        Results: 0,
        Title: "d4"
    };

    this.D6 = {
        ID: 3,
        Rolls: 1,
        Sides: 6,
        Modifier: 0,
        Results: 0,
        Title: "d6"
    };

    this.D8 = {
        ID: 4,
        Rolls: 1,
        Sides: 8,
        Modifier: 0,
        Results: 0,
        Title: "d8"
    };

    this.D10 = {
        ID: 5,
        Rolls: 1,
        Sides: 10,
        Modifier: 0,
        Results: 0,
        Title: "d10"
    };

    this.D12 = {
        ID: 6,
        Rolls: 1,
        Sides: 12,
        Modifier: 0,
        Results: 0,
        Title: "d12"
    };

    this.D20 = {
        ID: 7,
        Rolls: 1,
        Sides: 20,
        Modifier: 0,
        Results: 0,
        Title: "d20"
    };

    this.D100 = {
        ID: 8,
        Rolls: 1,
        Sides: 100,
        Modifier: 0,
        Results: 0,
        Title: "d100"
    };

    this.CUSTOM = {
        ID: 9,
        Rolls: 1,
        Sides: 0,
        Modifier: 0,
        Results: 0,
        Title: "Custom"
    };

    /////////////////////////////////////////////////

    /////////////////////////////////////////////////
    //Public Methods

    this.ToList = function () {
        return [
            this.D2,
            this.D4,
            this.D6,
            this.D8,
            this.D10,
            this.D12,
            this.D20,
            this.D100,
            this.CUSTOM
        ];
    };

    /////////////////////////////////////////////////
}