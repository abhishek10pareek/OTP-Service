module.exports = function(sequelize, DataTypes) {
    
    return sequelize.define('OTP', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValues: DataTypes.UUIDV4,
        },
        otp: DataTypes.STRING,
        expiration_time: DataTypes.DATE,
        verified: {
            type: DataTypes.BOOLEAN,
            defaultValues: false,
            allowNull: true,
        },
        created_at: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValues: sequelize.fn('now'),
        },
        updated_at: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValues: sequelize.fn('now'),
        }
    }, {       
        tableName: 'OTP'    
    });

};