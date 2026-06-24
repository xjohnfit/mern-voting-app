import { Schema, Types, model } from 'mongoose';

const voterSchema = new Schema({
    fullName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    votedElections: [{ type: Types.ObjectId, ref: 'Election', default: [] }],
    isAdmin: { type: Boolean, default: false },
}, { timestamps: true });

const VoterModel = model('Voter', voterSchema);

export default VoterModel;
