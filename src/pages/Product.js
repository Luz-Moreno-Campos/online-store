import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";
import ProductDetail from "../components/ProductDetails";
import SimilarProductGallery from "../components/SimilarProductsGallery";