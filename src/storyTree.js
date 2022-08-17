const storyTree = {
  root: {
    prompt: "You have crash landed on a strange planet.  What do you do?",
    type: "free-response",
    branches: [
      {
        trigger: "badge",
        prompt:
          "You open your comm badge and find a dilithium crystal. What do you do with the crystal?",
        type: "multiple-choice",
        branches: [
          { trigger: "use the crystal as fuel" },
          { trigger: "use the crystal as food" },
          { trigger: "use the crystal as a light source" },
          { trigger: "use the crystal as shovel to dig for minerals" }
        ]
      },
      {
        trigger: "phaser",
        prompt:
          "You open your phaser and find an omega particle.  What do you do with the particle?",
        type: "free-response"
      }
    ]
  }
};

export default storyTree;
