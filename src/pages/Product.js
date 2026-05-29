import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";
import ProductDetail from "../components/ProductDetails";
import SimilarProductGallery from "../components/SimilarProductsGallery";

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.45 } },
  exit:    { opacity: 0,       transition: { duration: 0.25 } },
};