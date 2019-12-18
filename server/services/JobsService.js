import mongoose from "mongoose";
import Job from "../models/Job";
import ApiError from "../utils/ApiError";

const _repository = mongoose.model("Job", Job);

class JobsService {
  async getAll() {
    return await _repository.find({}).populate("creator");
  }
  async getById(id) {
    let data = await _repository.findById(id);
    if (!data) {
      throw new ApiError("Invalid ID", 400);
    }
    return data;
  }

  async create(rawData) {
    let data = await _repository.create(rawData);
    return data;
  }

  async edit(id, update) {
    let data = await _repository.findOneAndUpdate({ _id: id }, update, {
      new: true
    });
    if (!data) {
      throw new ApiError("Invalid ID", 400);
    }
    return data;
  }

  async delete(id) {
    let data = await _repository.findOneAndUpdate({ _id: id }, { sold: true });
    if (!data) {
      throw new ApiError("Invalid ID", 400);
    }
  }
}

const jobsService = new JobsService();
export default jobsService;
