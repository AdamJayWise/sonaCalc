// info on how to lay out timing of different acquisition 
// time is in microseconds

var timingModes = {
    'sona6' : {

    rollingShutterInternalTriggeringOverlapShort : {
        longName : "Rolling Shutter, Internal Trigger (Overlap Mode)",
        shortName : "Rolling, Internal, Overlap",
        exposureMin : "4row",
        exposureMax : "600sec",
        cycleTimeMin : "1frame + 2row",
        cycleTimeFloor : "1frame + 2row",
        startDelay : "1row", //?
        shutterMode : "rolling"
    },

    rollingShutterInternalTriggeringNoOverlap : {
        longName : "Rolling Shutter, Internal Trigger, (No Overlap)",
        shortName : "Rolling, Internal, No Overlap",
        exposureMin : "4row",
        exposureMax : "600sec", // fix me to support parsing negative numbers
        cycleTimeMin : "1exp + 1frame + 1row",
        cycleTimeFloor : "1exp + 1frame + 1row",
        startDelay : "1row", //?
        shutterMode : "rolling"
    },

    rollingShutterExternalTriggeringNoOverlap : {
        longName : "Rolling Shutter, External Trigger, (No Overlap)",
        shortName : "Rolling, External, Non-Overlap",
        exposureMin : "4row",
        exposureMax : "600sec",
        cycleTimeMin : "1exp + 1frame + 2row",
        startDelay : "1row", //?
        shutterMode : "rolling"
    },

    rollingShutterExternalExposure : {
        longName : "Rolling Shutter, External Exposure Triggering",
        shortName : "Rolling, External Exposure",
        exposureMin : "4row",
        exposureMax : "600sec",
        cycleTimeMin : "1exp + 1frame + 1row",
        startDelay : "1row", //?
        shutterMode : "rolling"
    }
},

    'sona11' :{

            
        rollingShutterInternalTriggeringOverlapShort : {
            longName : "Rolling Shutter, Internal Trigger (Overlap Mode)",
            shortName : "Rolling, Internal, Overlap",
            exposureMin : "1row",
            exposureMax : "30sec",
            cycleTimeMin : "1frame + 1row   ",
            cycleTimeFloor : "1exposure + 1row",
            startDelay : "1row", //?
            shutterMode : "rolling"
        },
    
        rollingShutterInternalTriggeringNoOverlap : {
            longName : "Rolling Shutter, Internal Trigger, (No Overlap)",
            shortName : "Rolling, Internal, Overlap",
            exposureMin : "1row",
            exposureMax : "30sec", // fix me to support parsing negative numbers
            cycleTimeMin : "1exp + 1row",
            cycleTimeFloor : "1frame + 1row",
            cycleTimeMax : "1exposure + 1row",
            startDelay : "1row", //?
            shutterMode : "rolling"
        },

        rollingShutterExternalTriggeringNoOverlap : {
            longName : "Rolling Shutter, External Trigger, (Non-Overlap)",
            shortName : "Rolling, External, Non-Overlap",
            exposureMin : "1row",
            exposureMax : "30sec",
            cycleTimeMin : "1frame + 1row",
            cycleTimeFloor : "1exposure + 1row",
            startDelay : "1row", //?
            shutterMode : "rolling"
        },

        rollingShutterExternalExposure : {
            longName : "Rolling Shutter, External Exposure Triggering",
            shortName : "Rolling, External Exposure",
            exposureMin : "3row",
            exposureMax : "30sec",
            cycleTimeMin : "1exp + 1frame + 1row",
            startDelay : "1row", //?
            shutterMode : "rolling"
        }

        }

    }

                                        

                                        