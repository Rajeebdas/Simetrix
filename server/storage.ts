import { 
  type User, 
  type InsertUser,
  type Contact,
  type InsertContact,
  type Quote,
  type InsertQuote,
  type BlogPost,
  type InsertBlogPost,
  type CaseStudy,
  type InsertCaseStudy,
  type Testimonial,
  type InsertTestimonial
} from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  // Users
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Contacts
  createContact(contact: InsertContact): Promise<Contact>;
  getContacts(): Promise<Contact[]>;
  
  // Quotes
  createQuote(quote: InsertQuote): Promise<Quote>;
  getQuotes(): Promise<Quote[]>;
  
  // Blog Posts
  createBlogPost(post: InsertBlogPost): Promise<BlogPost>;
  getBlogPosts(): Promise<BlogPost[]>;
  getBlogPost(slug: string): Promise<BlogPost | undefined>;
  updateBlogPost(id: string, post: Partial<InsertBlogPost>): Promise<BlogPost | undefined>;
  
  // Case Studies
  createCaseStudy(study: InsertCaseStudy): Promise<CaseStudy>;
  getCaseStudies(): Promise<CaseStudy[]>;
  getCaseStudy(slug: string): Promise<CaseStudy | undefined>;
  getFeaturedCaseStudies(): Promise<CaseStudy[]>;
  
  // Testimonials
  createTestimonial(testimonial: InsertTestimonial): Promise<Testimonial>;
  getTestimonials(): Promise<Testimonial[]>;
  getFeaturedTestimonials(): Promise<Testimonial[]>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private contacts: Map<string, Contact>;
  private quotes: Map<string, Quote>;
  private blogPosts: Map<string, BlogPost>;
  private caseStudies: Map<string, CaseStudy>;
  private testimonials: Map<string, Testimonial>;

  constructor() {
    this.users = new Map();
    this.contacts = new Map();
    this.quotes = new Map();
    this.blogPosts = new Map();
    this.caseStudies = new Map();
    this.testimonials = new Map();
    
    // Initialize with some sample testimonials
    this.initializeSampleData();
  }

  private initializeSampleData() {
    // Sample testimonials
    const testimonial1: Testimonial = {
      id: randomUUID(),
      name: "John Davis",
      position: "Engineering Director",
      company: "AutoTech Inc.",
      content: "Simetrix's FEA analysis saved us months of physical prototyping. Their optimization reduced our component weight by 30% while maintaining all safety requirements.",
      rating: 5,
      featured: true,
      createdAt: new Date(),
    };

    const testimonial2: Testimonial = {
      id: randomUUID(),
      name: "Sarah Miller",
      position: "Product Manager",
      company: "InnovateTech",
      content: "Professional team with deep expertise in CAD modeling. They delivered our project ahead of schedule with exceptional quality documentation.",
      rating: 5,
      featured: true,
      createdAt: new Date(),
    };

    const testimonial3: Testimonial = {
      id: randomUUID(),
      name: "Raj Kumar",
      position: "CTO",
      company: "MachineWorks Ltd.",
      content: "Their thermal analysis expertise helped us solve critical overheating issues. Cost-effective solutions with global-standard quality.",
      rating: 5,
      featured: true,
      createdAt: new Date(),
    };

    this.testimonials.set(testimonial1.id, testimonial1);
    this.testimonials.set(testimonial2.id, testimonial2);
    this.testimonials.set(testimonial3.id, testimonial3);

    // Sample case studies
    const caseStudy1: CaseStudy = {
      id: randomUUID(),
      title: "Commercial Vehicle Frame Optimization",
      slug: "commercial-vehicle-frame-optimization",
      category: "Automotive Chassis",
      client: "Commercial Vehicle Manufacturer",
      challenge: "Heavy vehicle frame causing excessive fuel consumption and manufacturing costs",
      solution: "Advanced FEA and topology optimization to reduce weight while maintaining structural integrity",
      results: "25% weight reduction, 15% cost savings, improved fuel efficiency",
      timeline: "3 Weeks",
      imageUrl: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
      featured: true,
      createdAt: new Date(),
    };

    const caseStudy2: CaseStudy = {
      id: randomUUID(),
      title: "Heavy Machinery Thermal Analysis",
      slug: "heavy-machinery-thermal-analysis",
      category: "Industrial Equipment",
      client: "Industrial Equipment Manufacturer",
      challenge: "Industrial equipment overheating during extended operations",
      solution: "Comprehensive thermal management solution with CFD analysis and cooling optimization",
      results: "40% heat reduction, extended operational life, improved reliability",
      timeline: "2 Weeks",
      imageUrl: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
      featured: true,
      createdAt: new Date(),
    };

    const caseStudy3: CaseStudy = {
      id: randomUUID(),
      title: "EV Battery Housing Design",
      slug: "ev-battery-housing-design",
      category: "EV Components",
      client: "Electric Vehicle Startup",
      challenge: "Lightweight, crash-resistant battery housing for electric vehicles",
      solution: "Optimized housing design with advanced materials and safety analysis",
      results: "Safety certified, 20% lighter than industry standard, cost-effective manufacturing",
      timeline: "4 Weeks",
      imageUrl: "/assets/Electrical-vehical.jpg",
      featured: true,
      createdAt: new Date(),
    };

    this.caseStudies.set(caseStudy1.id, caseStudy1);
    this.caseStudies.set(caseStudy2.id, caseStudy2);
    this.caseStudies.set(caseStudy3.id, caseStudy3);

    // Sample blog posts
    const blogPost1: BlogPost = {
      id: randomUUID(),
      title: "The Future of FEA in Automotive Design",
      slug: "future-of-fea-automotive-design",
      excerpt: "Exploring how advanced finite element analysis is revolutionizing automotive engineering and reducing development costs.",
      content: "Finite Element Analysis (FEA) has become an indispensable tool in modern automotive design...",
      author: "Simetrix Engineering Team",
      publishedAt: new Date(),
      updatedAt: new Date(),
      featured: true,
    };

    this.blogPosts.set(blogPost1.id, blogPost1);
  }

  // User methods
  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  // Contact methods
  async createContact(insertContact: InsertContact): Promise<Contact> {
    const id = randomUUID();
    const contact: Contact = { 
      ...insertContact,
      company: insertContact.company || "",
      newsletter: insertContact.newsletter || false,
      id, 
      createdAt: new Date() 
    };
    this.contacts.set(id, contact);
    return contact;
  }

  async getContacts(): Promise<Contact[]> {
    return Array.from(this.contacts.values());
  }

  // Quote methods
  async createQuote(insertQuote: InsertQuote): Promise<Quote> {
    const id = randomUUID();
    const quote: Quote = { 
      ...insertQuote,
      company: insertQuote.company || "",
      phone: insertQuote.phone || "",
      timeline: insertQuote.timeline || "",
      budget: insertQuote.budget || "",
      id, 
      createdAt: new Date() 
    };
    this.quotes.set(id, quote);
    return quote;
  }

  async getQuotes(): Promise<Quote[]> {
    return Array.from(this.quotes.values());
  }

  // Blog post methods
  async createBlogPost(insertPost: InsertBlogPost): Promise<BlogPost> {
    const id = randomUUID();
    const now = new Date();
    const post: BlogPost = { 
      ...insertPost,
      featured: insertPost.featured || false,
      id, 
      publishedAt: now,
      updatedAt: now 
    };
    this.blogPosts.set(id, post);
    return post;
  }

  async getBlogPosts(): Promise<BlogPost[]> {
    return Array.from(this.blogPosts.values()).sort(
      (a, b) => b.publishedAt.getTime() - a.publishedAt.getTime()
    );
  }

  async getBlogPost(slug: string): Promise<BlogPost | undefined> {
    return Array.from(this.blogPosts.values()).find(post => post.slug === slug);
  }

  async updateBlogPost(id: string, updateData: Partial<InsertBlogPost>): Promise<BlogPost | undefined> {
    const existingPost = this.blogPosts.get(id);
    if (!existingPost) return undefined;

    const updatedPost: BlogPost = {
      ...existingPost,
      ...updateData,
      updatedAt: new Date()
    };
    this.blogPosts.set(id, updatedPost);
    return updatedPost;
  }

  // Case study methods
  async createCaseStudy(insertStudy: InsertCaseStudy): Promise<CaseStudy> {
    const id = randomUUID();
    const study: CaseStudy = { 
      ...insertStudy,
      imageUrl: insertStudy.imageUrl || "",
      featured: insertStudy.featured || false,
      id, 
      createdAt: new Date() 
    };
    this.caseStudies.set(id, study);
    return study;
  }

  async getCaseStudies(): Promise<CaseStudy[]> {
    return Array.from(this.caseStudies.values()).sort(
      (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
    );
  }

  async getCaseStudy(slug: string): Promise<CaseStudy | undefined> {
    return Array.from(this.caseStudies.values()).find(study => study.slug === slug);
  }

  async getFeaturedCaseStudies(): Promise<CaseStudy[]> {
    return Array.from(this.caseStudies.values()).filter(study => study.featured);
  }

  // Testimonial methods
  async createTestimonial(insertTestimonial: InsertTestimonial): Promise<Testimonial> {
    const id = randomUUID();
    const testimonial: Testimonial = { 
      ...insertTestimonial,
      featured: insertTestimonial.featured || false,
      id, 
      createdAt: new Date() 
    };
    this.testimonials.set(id, testimonial);
    return testimonial;
  }

  async getTestimonials(): Promise<Testimonial[]> {
    return Array.from(this.testimonials.values());
  }

  async getFeaturedTestimonials(): Promise<Testimonial[]> {
    return Array.from(this.testimonials.values()).filter(testimonial => testimonial.featured);
  }
}

export const storage = new MemStorage();
