export const schemaVersion = 1

export const migration = (oldRealm, newRealm) => {
    //Upgrade to schema version 1
    if (oldRealm.schemaVersion < 1) {
      const oldSets = oldRealm.objects('Set');
      const newSets = newRealm.objects('Set');

      const oldExercises = oldRealm.objects('Exercise');
      const newExercises = newRealm.objects('Exercise');

      for (let i = 0; i < oldSets.length; i++) {
        newSets[i] = oldSets[i]
      }

      for (let i = 0; i < oldExercises.length; i++) {
        newExercises[i] = oldExercises[i]
      }
    }
}

export const WorkoutSchema = {
    name: 'Workout',
    properties: {
        date:  'date',
        isSuccess: 'bool',
        pull: 'Set[]',
        push: 'Set[]',
        legs: 'Set[]',
        core: 'Set[]',
    }
};

export const SetSchema = {
    name: 'Set',
    properties: {
        exercise:   'Exercise',
        reps: 'int',
        weight: 'int?',
        repsCompleted: 'int',
        isSuccess:  'bool',
    }
};

export const ExerciseSchema = {
    name: 'Exercise',
    properties: {
        name:     'string',
        currentWeight: 'int?',
        currentReps:   'int',
        isBodyweight:  'bool'
    }
};