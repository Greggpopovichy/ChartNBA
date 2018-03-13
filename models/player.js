module.exports = function(sequelize, DataTypes) {
    const nba_player = sequelize.define("nba_player", {
      Year: {
        type: DataTypes.STRING
      },
      Player: {
        type: DataTypes.STRING,
        primaryKey: true
      },
      Pos: {
        type: DataTypes.STRING
      },
      Age: {
        type: DataTypes.INTEGER
      },
      Tm: {
        type: DataTypes.STRING
      },
      G:{
        type: DataTypes.INTEGER
      },
      MP: {
        type: DataTypes.INTEGER
      },
      PER: {
        type: DataTypes.DOUBLE
      },
      TS: {
        type: DataTypes.DOUBLE
      },
      ThreePointAttemptRate: {
        type: DataTypes.DOUBLE
      },
      FTr: {
        type: DataTypes.DOUBLE
      },
      ORBpercentage: {
        type: DataTypes.DOUBLE
      },
      DRBpercentage: {
        type: DataTypes.DOUBLE
      },
      TRBpercentage: {
        type: DataTypes.DOUBLE
      },
      ASTpercentage: {
        type: DataTypes.DOUBLE
      },
      STLpercentage: {
        type: DataTypes.DOUBLE
      },
      BLKpercentage: {
        type: DataTypes.DOUBLE
      },
      TOVpercentage: {
        type: DataTypes.DOUBLE
      },
      USGpercentage: {
        type: DataTypes.DOUBLE
      },
      OWS: {
        type: DataTypes.DOUBLE
      },
      DWS: {
        type: DataTypes.DOUBLE
      },
      WS: {
        type: DataTypes.DOUBLE
      },
      WSperfourtyeight: {
        type: DataTypes.DOUBLE
      },
      OBPM: {
        type: DataTypes.DOUBLE
      },
      DBPM: {
        type: DataTypes.DOUBLE
      },
      BPM: {
        type: DataTypes.DOUBLE
      },
      VORP: {
        type: DataTypes.DOUBLE
      }
    });
    return nba_player;
  };